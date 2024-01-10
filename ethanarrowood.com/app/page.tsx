import Link from "next/link";
import Image from "next/image";
import { rgbDataURL } from "./util/rgbDataURL";
import talks from './talks/talks.json';
import { YouTubeEmbed } from "./components/YouTubeEmbed";

async function getChessStats () {
  const res = await fetch('https://api.chess.com/pub/player/ethanarrowood/stats');

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Index() {
  const chessStats = await getChessStats();

  return (
    <>
      <div className="block pb-4 w-full text-lg">
        👋 I&apos;m{" "}
        <h1 className="inline text-2xl text-emerald-800">Ethan Arrowood</h1>
        , here are my highlights...
        <span className="float-right text-emerald-700">━━━━━━</span>
      </div>
      <div className="block w-full flex flex-col gap-4">
        <div className="block w-full flex flex-col sm:flex-row gap-4">
          <Image
            src={"/images/node_conf_eu.jpg"}
            alt="Picture of me giving a talk at Node Conf EU"
            className="rounded-xl w-2/3 m-auto sm:w-1/3 sm:m-0"
            placeholder="blur"
            blurDataURL={rgbDataURL(129, 133, 137)}
            width={1192}
            height={1364}
          />
          <div className="flex flex-col w-full sm:w-2/3">
            <div className="block flex flex-row gap-2">
              <p className="text-xl inline">💻</p>
              <ul className="text-xl">
                <li><Link className="underline" href="https://vercel.com">Vercel</Link> Senior Software Engineer</li>
                <li><Link className="underline" href="https://nodejs.org">Node.js</Link> Contributor</li>
                <li><Link className="underline" href="https://github.com/nodejs/undici/">Undici</Link> Maintainer</li>
                <li><Link className="underline" href="https://tc39.es">ECMA TC39</Link> Delegate</li>
                <li><Link className="underline" href="https://openjsf.org">OpenJS</Link> & <Link className="underline" href="https://wintercg.org">WinterCG</Link> Collaborator</li>
                <li>Developing <Link className="underline" href="https://github.com/Ethan-Arrowood/mddl">MDDL</Link>, markdown documentation language</li>
              </ul>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-xl inline">🎿</p>
              <ul className="text-xl">
                <li>Breckenridge Ski Instructor</li>
                <li>PSIA Alpine 1 & Freestyle 1 Certified</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="block w-full flex flex-col gap-2">
          <hr className="border border-emerald-700" />
          <div className="flex flex-col gap-2">
            <p className="text-xl block">🎤 Recent Talks</p>
            <div className="w-full m-auto flex flex-col align-center justify-center md:justify-between md:flex-row">
              {
                talks.slice(0,3).map(talk => (
                  <YouTubeEmbed key={talk.id} id={talk.id} />
                ))
              }
            </div>
          </div>
          <hr className="border border-emerald-700" />
          <div className="flex flex-row gap-2 justify-center">
            <p className="text-xl inline">📚</p>
            <ul className="text-xl">
              <li><Link href="https://www.goodreads.com/book/show/60766189-a-day-of-fallen-night"><span className="underline">A Day of Fallen Night</span> - Samantha Shannon</Link></li>
              <li><Link href="https://www.goodreads.com/book/show/32025298-the-woman-who-smashed-codes"><span className="underline">The Woman Who Smashed Codes</span> - Jason Fagone</Link></li>
              <li><Link href="https://www.goodreads.com/book/show/125107160-how-to-win-at-chess"><span className="underline">How to Win at Chess</span> - Levy Rozman</Link></li>
            </ul>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-row gap-2">
              <p className="text-xl inline">♟️</p>
              <ul className="text-xl">
                <li><Link className="underline" href="https://www.chess.com/member/ethanarrowood">chess.com/ethanarrowood</Link></li>
                {
                  <>
                    <li>Rapid: {chessStats?.chess_rapid.last.rating ?? "~1200"}</li>
                    <li>Blitz: {chessStats?.chess_blitz.last.rating ?? "~700"}</li>
                    <li>Daily: {chessStats?.chess_daily.last.rating ?? "~900"}</li>
                  </>
                }
              </ul>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-xl inline">🏋️‍♂️</p>
              <ul className="text-xl">
                <li>Deadlift: 315lbs</li>
                <li>Back Squat: 215lbs</li>
                <li>Push Press: 125lbs</li>
                <li>Power Clean: 125lbs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
