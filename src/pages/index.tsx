import { type NextPage } from "next";
import { useSound } from "~/context/soundContext";
import Head from "next/head";
import Link from "next/link";

import Title from "./components/title";
import Game from "./components/game";
import ToolBar from "./components/toolbar";
import Menu from "./components/menu";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  // sound
  const { sound } = useSound();
  const [clickAudio, setClickAudio] = useState<HTMLAudioElement | undefined>();
  useEffect(() => {
    setClickAudio(new Audio("/audios/click.wav"));
  }, []);
  const clickPlay = () => {
    if (sound) clickAudio?.play();
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  /**
   * *** TYPE ***
   * 0:world(default)
   * 1:dilicious
   * 2:fresh
   * 3:wild
   */
  const [type, setType] = useState<number>(-1);

  const chooseCardType = (type: number) => {
    clickPlay();
    setType(type);
    setIsMenuOpen(false);
  };
  return (
    <>
      <Head>
        <title>
          MemoriaMatch3D | Play 3D Memory Match - Test Your Memory Skills
        </title>
        <meta
          name="description"
          content="Play 3D Memory Match, a classic card-matching game that challenges your memory and concentration skills. Test your ability to find matching pairs and earn points in this fun and addictive online memory game. Try it now and see how many matches you can make!"
        />
        <meta
          name="keywords"
          content="Memory Match, Concentration game, card-matching game, memory skills, concentration skills, online memory game, matching pairs, test your memory, improve memory, memory challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full">
        {/* menu */}
        <Menu
          isOpen={isMenuOpen}
          type={type}
          closeMenu={() => {
            clickPlay();
            setIsMenuOpen(false);
          }}
          chooseCardType={chooseCardType}
        />
        {/* content */}
        <div
          className={`container mx-auto flex ${isMenuOpen ? "blur-md" : ""}`}
        >
          <div className="mx-auto h-[200px] w-full sm:w-[1080px]">
            <Title />
            <ToolBar
              openMenu={() => {
                setIsMenuOpen(true);
              }}
            />
            {/* game */}
            <Game type={type} />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
