import { useEffect, useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import worldSet from "./cardsSet/world";
import deliciousSet from "./cardsSet/delicious";
import freshSet from "./cardsSet/fresh";
import wildSet from "./cardsSet/wild";
import Card from "./card";
import shuffle from "~/utils/shuffle";
import double from "~/utils/double";
import type CardProps from "./cardsSet/interface";
import { type GameCardProps } from "./card";
import { useSound } from "~/context/soundContext";
import useToggleProcess from "~/store/useToggleProcess";

export default function Game(props: { type: number }) {
  // game start/not
  const [isProcessing, toggle] = useToggleProcess((state) => [
    state.isProcessing,
    state.toggle,
  ]);
  // sound
  const { sound } = useSound();
  const [clickAudio, setclickAudio] = useState<HTMLAudioElement | undefined>();
  const [cutAudio, setcutAudio] = useState<HTMLAudioElement | undefined>();
  const [pairAudio, setpairAudio] = useState<HTMLAudioElement | undefined>();
  const [errorAudio, seterrorAudio] = useState<HTMLAudioElement | undefined>();
  const [shuffleAudio, setshuffleAudio] = useState<
    HTMLAudioElement | undefined
  >();
  useEffect(() => {
    setclickAudio(new Audio("/audios/click.wav"));
    setcutAudio(new Audio("/audios/cut.wav"));
    setpairAudio(new Audio("/audios/pair.mp3"));
    seterrorAudio(new Audio("/audios/error.wav"));
    setshuffleAudio(new Audio("/audios/shuffle.wav"));
    toggle(false);
  }, []);
  const audioPlay = async (type?: number) => {
    if (sound) {
      switch (type) {
        case 0:
          await cutAudio?.play();
          break;
        case 1:
          await pairAudio?.play();
          break;
        case 2:
          await errorAudio?.play();
          break;
        case 3:
          await shuffleAudio?.play();
          break;
        default:
          await clickAudio?.play();
      }
    }
  };
  const { type } = props;
  const [step, setStep] = useState<number>(0);
  const [animationParent] = useAutoAnimate();
  // size from 4*4=16 -> 4*7=28
  const row = 4;
  const [column, setColumn] = useState<number>(5);
  const [playing, setPlaying] = useState<boolean>(false);
  const cardSet: CardProps[] = useMemo(() => {
    /**
     * *** TYPE ***
     * 0:world
     * 1:dilicious
     * 2:fresh
     * 3:wild
     */
    switch (type) {
      case 0:
        return double(shuffle(worldSet));
      case 1:
        return double(shuffle(deliciousSet));
      case 2:
        return double(shuffle(freshSet));
      case 3:
        return double(shuffle(wildSet));
      default:
        return double(worldSet);
    }
  }, [type]);

  const typeString: string = useMemo(() => {
    /**
     * *** TYPE ***
     * 0:world
     * 1:dilicious
     * 2:fresh
     * 3:wild
     */
    switch (type) {
      case 0:
        return "World";
      case 1:
        return "Dilicious";
      case 2:
        return "Fresh";
      case 3:
        return "Wild";
      default:
        return "World";
    }
  }, [type]);

  // cards displaying
  const [curCards, setCurCards] = useState<GameCardProps[]>([]);
  const [curIndex, setCurIndex] = useState<number>(-2);
  const [lastIndex, setLastIndex] = useState<number>(-1); //-1 means no last card

  useMemo(() => {
    if (!isProcessing) {
      const rCards: GameCardProps[] = cardSet
        .slice(0, row * column)
        .map((card: CardProps, index) => {
          return {
            status: 0,
            originId: card.id,
            id: index,
            content: card.content,
          };
        });
      setCurCards(rCards);
      setLastIndex(-1);
      setPlaying(false);
      setStep(0);
    }
  }, [column, cardSet, isProcessing]);

  const [canPlay, setCanPlay] = useState(true);

  const clickCard = (id: number) => {
    if (canPlay) {
      // set cards
      let tmpCards: GameCardProps[] = [...curCards];
      tmpCards = curCards.map((card: GameCardProps) => {
        if (card.id == id) return { ...card, status: 1 };
        else return card;
      });
      setCurCards(tmpCards);

      setCurIndex(id);
      setStep(step + 1);
      void audioPlay(0);
    } else void audioPlay(2);
  };

  useMemo(() => {
    setCanPlay(false);
    if (lastIndex >= 0) {
      if (Math.floor(curIndex / 2) == Math.floor(lastIndex / 2)) {
        void audioPlay(1);
        setLastIndex(-1);
        setCanPlay(true);
      } else {
        let tmpCards: GameCardProps[] = [...curCards];
        tmpCards = curCards.map((card: GameCardProps) => {
          if (card.id == curIndex || card.id == lastIndex)
            return { ...card, status: 2 };
          else return card;
        });
        void audioPlay(2);
        setTimeout(() => {
          setCurCards(tmpCards);
          setLastIndex(-1);
          setCanPlay(true);
        }, 500);
      }
    } else {
      setLastIndex(curIndex);
      setCanPlay(true);
    }
  }, [step]);

  const go = () => {
    const rCards = curCards.map((card) => {
      return {
        ...card,
        status: 2,
      };
    });
    setPlaying(true);
    setCurCards(shuffle(rCards));
    toggle(true);
    void audioPlay(3);
  };

  return (
    <div className="mt-[-60px] origin-top scale-75 rounded-lg py-[20px] sm:mt-0 sm:scale-100 sm:shadow-lg">
      {/* basic info */}
      <div className="py-[10px] text-center">
        <p>
          Current Theme: <span className="font-bold">{typeString}</span>
        </p>
        <p>
          Cards Total: <span className="font-bold">{column * row}</span>
        </p>
        <p>
          Step Used: <span className="font-bold">{step}</span>
        </p>
      </div>
      {/* bottom toolbar */}
      <div className="mb-20 flex justify-center">
        {!isProcessing && column > 4 && (
          <div
            className="cube cube_minus cursor-pointer"
            onClick={() => {
              void audioPlay();
              setColumn(column - 1);
            }}
          >
            <a></a>
          </div>
        )}
        {!isProcessing && column < 7 && (
          <div
            className="cube cube_add cursor-pointer"
            onClick={() => {
              void audioPlay();
              setColumn(column + 1);
            }}
          >
            <a></a>
          </div>
        )}
        {!isProcessing && (
          <div className="cube cube_start cursor-pointer" onClick={go}>
            <a></a>
          </div>
        )}
      </div>
      {/* cards */}
      <div
        className="mx-auto grid w-fit grid-cols-4 gap-8 sm:grid-flow-col sm:grid-rows-4 sm:pb-[60px] "
        ref={animationParent}
      >
        {curCards.map((card: GameCardProps) => {
          const { originId, content, status, id } = card;
          return (
            <Card
              originId={originId}
              content={content}
              status={status}
              id={id}
              key={id}
              clickCard={clickCard}
            />
          );
        })}
      </div>
    </div>
  );
}
