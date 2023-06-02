import { useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import worldSet from "./cardsSet/world";
import deliciousSet from "./cardsSet/delicious";
import freshSet from "./cardsSet/fresh";
import wildSet from "./cardsSet/wild";
import Card from "./card";
import shuffle from "~/utils/shuffle";
import double from "~/utils/double";
import CardProps from "./cardsSet/interface";
import { GameCardProps } from "./card";

export default function Game(props: { type: number }) {
  const { type } = props;
  const [animationParent] = useAutoAnimate();
  // size from 4*4=16 -> 4*7=28
  const row = 4;
  const [column, setColumn] = useState<number>(4);
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
    setPlaying(false);
  }, [column, cardSet]);

  const clickCard = (id: number) => {
    let tmpCards: GameCardProps[] = curCards.slice(0);
    setCurIndex(id);
    if (lastIndex < 0) {
      setLastIndex(curIndex);
    } else {
      setLastIndex(-1);
    }
    tmpCards = curCards.map((card: GameCardProps) => {
      if (card.id == id) return { ...card, status: 1 };
      else return card;
    });
    setCurCards(tmpCards);
  };

  useMemo(() => {
    if (lastIndex > 0) {
      if (Math.floor(curIndex / 2) == Math.floor(lastIndex / 2)) {
        // console.log("match!");
      } else {
        let tmpCards: GameCardProps[] = curCards.slice(0);
        tmpCards = curCards.map((card: GameCardProps) => {
          if (card.id == curIndex || card.id == lastIndex)
            return { ...card, status: 2 };
          else return card;
        });
        setTimeout(() => {
          setCurCards(tmpCards);
        }, 500);
      }
    }
  }, [curIndex, lastIndex]);

  const go = async () => {
    let rCards = curCards.map((card) => {
      return {
        ...card,
        status: 2,
      };
    });
    setPlaying(true);
    setCurCards(shuffle(rCards));
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
      </div>
      {/* bottom toolbar */}
      <div className="mb-20 flex justify-center">
        {!playing && column > 4 && (
          <div
            className="cube cube_minus cursor-pointer"
            onClick={() => {
              setColumn(column - 1);
            }}
          >
            <a></a>
          </div>
        )}
        {!playing && column < 7 && (
          <div
            className="cube cube_add cursor-pointer"
            onClick={() => {
              setColumn(column + 1);
            }}
          >
            <a></a>
          </div>
        )}
        {!playing && (
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
        {curCards.map((card: GameCardProps, index: number) => {
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
