import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Title from "./components/title";
import Game from "./components/game";
import Menu from "./components/menu";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          MemoriaMatch3D | Play 3D Memory Match - Test Your Memory Skills
        </title>
        <meta
          name="description"
          content="Play Memory Match, a classic card-matching game that challenges your memory and concentration skills. Test your ability to find matching pairs and earn points in this fun and addictive online memory game. Try it now and see how many matches you can make!"
        />
        <meta
          name="keywords"
          content="Memory Match, Concentration game, card-matching game, memory skills, concentration skills, online memory game, matching pairs, test your memory, improve memory, memory challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full">
        {/* menu */}
        <Menu />
        {/* content */}
        <div className="container mx-auto flex">
          <div className="mx-auto h-[200px] w-full sm:w-[1080px]">
            <Title />

            {/* game */}
            <Game />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
