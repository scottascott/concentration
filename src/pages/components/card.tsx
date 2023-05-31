import { useState } from "react";
import ReactCardFlip from "react-card-flip";
export default function Card() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerClassName="flex flex-col w-[123px] h-[200px]"
    >
      {/* front */}
      <div
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
        className="h-full cursor-pointer rounded-md ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50"
      ></div>
      {/* back */}
      <div
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
        className="flex bg-violet-300 h-full cursor-pointer items-center justify-center rounded-md border-8 border-double border-black text-[60px] ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50"
      >
        <span>&#128303;</span>
      </div>
    </ReactCardFlip>
  );
}
