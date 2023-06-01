import { useMemo, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import worldSet from "./cardsSet/world";
import deliciousSet from "./cardsSet/delicious";
import freshSet from "./cardsSet/fresh";
import wildSet from "./cardsSet/wild";
import Card from "./card";
import shuffle from "~/utils/shuffle";
import CardProps from "./cardsSet/interface";

export default function Game(props: { type: number }) {
  const { type } = props;
  const [animationParent] = useAutoAnimate();
  // size from 4*4=16 -> 4*7=28
  const row = 4;
  const [column, setColumn] = useState<number>(5);
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
        return shuffle(worldSet);
      case 1:
        return shuffle(deliciousSet);
      case 2:
        return shuffle(freshSet);
      case 3:
        return shuffle(wildSet);
      default:
        return worldSet;
    }
  }, [type]);

  const currentCards: CardProps[] = useMemo(() => {
    let rCards: CardProps[] = [];
    cardSet.map((card: CardProps, index: number) => {
      if (index < (row * column) / 2) {
        rCards.push(card);
        rCards.push(card);
      }
    });
    return rCards;
  }, [column, cardSet]);
  return (
    <div className="rounded-lg py-[100px] shadow-lg">
      {/* cards */}
      <div
        className="mx-auto grid w-fit grid-flow-col grid-rows-4 gap-8"
        ref={animationParent}
      >
        {currentCards.map((card: CardProps, index: number) => {
          return <Card id={card.id} content={card.content} key={index} />;
        })}
      </div>
      <div
        className="cube cube_minus cursor-pointer"
        onClick={() => {
          setColumn(column - 1);
        }}
      >
        <a></a>
      </div>
      <div
        className="cube cube_add cursor-pointer"
        onClick={() => {
          setColumn(column + 1);
        }}
      >
        <a></a>
      </div>
    </div>
  );
}
