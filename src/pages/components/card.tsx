import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardProps from "./cardsSet/interface";

export default function Card(props: CardProps) {
  const { id, content } = props;
  // const variables
  const cardWidth = 92;
  const cardHeight = 150;

  // status
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // fake 3d look at
  const x = useMotionValue(cardWidth / 2);
  const y = useMotionValue(cardHeight / 2);

  const rotateX = useTransform(y, [0, cardHeight], [45, -45]);
  const rotateY = useTransform(x, [0, cardWidth], [-45, 45]);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  function handleLeave() {
    x.set(cardWidth / 2);
    y.set(cardHeight / 2);
  }
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerClassName={`flex flex-col w-[92px] h-[150px]`}
    >
      {/* front */}
      <div
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
        className="flex h-full  cursor-pointer items-center justify-center rounded-md ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50"
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
      >
        <motion.div
          style={{
            fontSize: 72,
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        >
          {content}
        </motion.div>
      </div>
      {/* back */}
      <div
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
        className="flex h-full cursor-pointer items-center justify-center rounded-md border-8 border-double border-black bg-violet-300 text-[60px] ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50"
      >
        <span>&#128303;</span>
      </div>
    </ReactCardFlip>
  );
}
