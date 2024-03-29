import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Tooltip, Tour, message } from "antd";
import type { TourProps } from "antd";
import { useSound } from "~/context/soundContext";
interface Props {
  openMenu: () => void;
}
export default function ToolBar(props: Props) {
  // sound
  const { sound, setSound } = useSound();
  const [clickAudio, setClickAudio] = useState<HTMLAudioElement | undefined>();
  useEffect(() => {
    setClickAudio(new Audio("/audios/click.wav"));
  }, []);
  const clickPlay = async () => {
    if (sound) await clickAudio?.play();
  };

  // for tour guide
  const ref = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps["steps"] = [
    {
      title: "MemoriaMatch",
      description:
        "Welcome to MemoriaMatch! It is a classic card-matching game that challenges your memory and concentration skills.",
      cover: <img alt="title.png" src="/assets/title.png" />,
      target: null,
    },
    {
      title: "Step 1",
      description: (
        <>
          Click here to choose a card theme!
          <ul className="my-[20px] ml-[30px] list-disc capitalize">
            <li> world</li>
            <li> dilicious</li>
            <li> fresh</li>
            <li> wild</li>
          </ul>
        </>
      ),
      placement: "bottomRight",
      target: () => ref.current,
    },
    {
      title: "Step 2",
      description: (
        <p>
          Now you can set the total number of cards by click{" "}
          <span className="rounded-md bg-purple-500 px-[20px] py-[2px] font-bold text-white">
            +
          </span>{" "}
          or{" "}
          <span className="rounded-md bg-purple-500 px-[20px] py-[2px] font-bold text-white">
            -
          </span>
          . After that, please click{" "}
          <span className="rounded-md bg-purple-500 px-[20px] py-[2px] font-bold text-white">
            GO!
          </span>{" "}
          to start game. Enjoy your trip with MemoriaMatch!
        </p>
      ),
      target: null,
    },
  ];

  const { openMenu } = props;
  return (
    <>
      {/* pc */}
      <div className="hidden h-[140px] w-full origin-top justify-center pb-[20px] sm:flex sm:scale-100 sm:gap-x-20">
        {/* tip */}
        <Tooltip title="Guide" color={"#a855f7"}>
          <div
            className="w-[120px] cursor-pointer"
            onClick={() => {
              void clickPlay();
              setOpen(true);
            }}
          >
            <Spline scene="/assets/tip.splinecode" />
          </div>
        </Tooltip>
        {/* rank */}
        {/* <Tooltip title="Ranking List" color={"#a855f7"}>
        <div className="w-[120px] cursor-pointer">
          <Spline scene="/assets/ranking.splinecode" />
        </div>
      </Tooltip> */}
        {/* audio */}
        <Tooltip title="Sound Effect" color={"#a855f7"}>
          <div
            className={`w-[120px] cursor-pointer ${sound ? "" : "grayscale"}`}
            onClick={() => {
              void clickPlay();
              setSound(!sound);
            }}
          >
            <Spline scene="/assets/audio.splinecode" />
          </div>
        </Tooltip>
        {/* theme */}
        <Tooltip title="Theme" color={"#a855f7"}>
          <div className="w-[120px] cursor-pointer" ref={ref}>
            <Spline
              onClick={() => {
                void clickPlay();
                openMenu();
              }}
              scene="/assets/theme.splinecode"
            />
          </div>
        </Tooltip>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>
      {/* mobile */}
      <div className="flex h-[140px] w-full origin-top scale-50 justify-center gap-x-10 pb-[20px] sm:hidden">
        <div
          className="w-[120px] cursor-pointer"
          onClick={() => {
            void clickPlay();
            void message.info("Please try guide function in PC browser.");
          }}
        >
          <Spline scene="/assets/tip.splinecode" />
        </div>
        <div
          className={`w-[120px] cursor-pointer ${sound ? "" : "grayscale"}`}
          onClick={() => {
            void clickPlay();
            setSound(!sound);
          }}
        >
          <Spline scene="/assets/audio.splinecode" />
        </div>
        <div className="w-[120px] cursor-pointer" ref={ref}>
          <Spline
            onClick={() => {
              void clickPlay();
              openMenu();
            }}
            scene="/assets/theme.splinecode"
          />
        </div>
      </div>
    </>
  );
}
