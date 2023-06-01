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

  // cards displaying
  const [curCards, setCurCards] = useState<GameCardProps[]>([]);
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
    let tmpCards = curCards;
    if (lastIndex == -1) {
      setLastIndex(id);
    }
  };

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
    <div className="rounded-lg py-[100px] shadow-lg">
      {/* cards */}
      <div
        className="mx-auto grid w-fit grid-flow-col grid-rows-4 gap-8"
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
            />
          );
        })}
      </div>
      {/* bottom toolbar */}
      <div className="mt-20 flex justify-center">
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
    </div>
  );
}
