import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
export default function Card() {
    // const variables
  const cardWidth = 122;
  const cardHeight = 200;

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
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
      containerClassName={`flex flex-col w-[122px] h-[200px]`}
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
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: "red",
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        />
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
