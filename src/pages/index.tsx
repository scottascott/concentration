import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Title from "./components/title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          MemoriaMatch | Play Memory Match - Test Your Memory Skills
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Title/>
        </div>
      </main>
    </>
  );
};

export default Home;
