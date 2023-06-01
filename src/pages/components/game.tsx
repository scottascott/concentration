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
  // size from 4*6=24 -> 7*6=42
  const column = 6;
  const [row, setRow] = useState<number>(4);
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
        return shuffle(worldSet);
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
  }, [row, cardSet]);
  return (
    <div className="rounded-lg py-[100px] shadow-lg">
      {/* cards */}
      <div
        className="mx-auto grid w-fit grid-cols-6 gap-8"
        ref={animationParent}
      >
        {currentCards.map((card: CardProps, index: number) => {
          return <Card id={card.id} content={card.content} key={index} />;
        })}
      </div>
      <div
        className="inline h-20 w-20 cursor-pointer bg-red-500"
        onClick={() => {
          setRow(row - 1);
        }}
      >
        -
      </div>
      <div
        className="ml-20 inline h-20 w-20 cursor-pointer bg-red-500"
        onClick={() => {
          setRow(row + 1);
        }}
      >
        +
      </div>
    </div>
  );
}
