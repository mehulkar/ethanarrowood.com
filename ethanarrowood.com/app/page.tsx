import Link from "next/link";
import Image from "next/image";
import { rgbDataURL } from "./util/rgbDataURL";

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
        <div className="block w-full flex flex-row gap-4">
          <Image
            src={"/images/node_conf_eu.jpg"}
            alt="Picture of me giving a talk at Node Conf EU"
            className="rounded-xl w-2/3 m-auto sm:w-1/3 sm:m-0"
            placeholder="blur"
            blurDataURL={rgbDataURL(129, 133, 137)}
            width={1192}
            height={1364}
          />
          {/* <p className="text-xl">Currently Listening to:</p>
          <div className="flex flex-row gap-2">
            <p className="text-xl inline">🎧</p>
            <ul className="text-xl">
              <li>Spotify</li>
            </ul>
          </div> */}
          <div className="flex flex-col w-full sm:w-2/3">
            <div className="block flex flex-row gap-2">
              <p className="text-xl inline">💻</p>
              <ul className="text-xl">
                <li>Vercel Senior Software Engineer</li>
                <li>Node.js Contributor</li>
                <li>Undici Maintainer</li>
                <li>ECMA TC39 Delegate</li>
                <li>OpenJS & WinterCG Collaborator</li>
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
        <hr className="border border-emerald-700" />
        <div className="block w-full flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <p className="text-xl inline">🎤</p>
            <ul className="text-xl">
              <li>OpenJS World 2023 - <Link href="https://youtu.be/fih5Yt3UiNg">Advancing Web Runtime Interoperability with WinterCG: Empowering the Future of the Web</Link></li>
              <li>NodeConf EU 2022 - <Link href="https://youtu.be/Koy8XkDSf30">Making Fetch Happen</Link></li>
              <li>OpenJS World 2022 - <Link href="https://youtu.be/0hker18pjbM">Making Fetch Happen</Link></li>
              <li>Node Congress 2022 - <Link href="https://youtu.be/mQ0y3IUMjys">Safely Handling Dynamic Data with TypeScript</Link></li>
              <li>NodeTLV 2021 - <Link href="https://youtu.be/JDXphHBglQU">Making Fetch Happen</Link></li>
              <li>OpenJS World 2021 - <Link href="https://youtu.be/y5W3Fm9dpZE">Safely Handling Dynamic Data with TypeScript</Link></li>
              <li>TypeScript Berlin 2021 - <Link href="https://youtu.be/JKIOMaL8Ets">Advanced TypeScript Definition Patterns with Fastify</Link></li>
              <li>OpenJS World 2020 - <Link href="https://youtu.be/WjJdJkkriyE">Applying Advanced TypeScript Definition Patterns</Link></li>
              <li>Node.js Interactive 2019 - <Link href="https://youtu.be/mQUjrstuUgE">Why You Should Maintain Type Definitions for Your JavaScript Project</Link></li>
              <li>React NYC 2019 - <Link href="https://youtu.be/iOTFnHJvTVw">Contributing to Open Source</Link></li>
            </ul>
          </div>
          <hr className="border border-emerald-700" />
          <div className="flex flex-row gap-2 justify-center">
            <p className="text-xl inline">📚</p>
            <ul className="text-xl">
              <li>A Day of Fallen Night - Samantha Shannon</li>
              <li>The Woman Who Smashed Codes - Jason Fagone</li>
              <li>How to Win at Chess - Levy Rozman</li>
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
