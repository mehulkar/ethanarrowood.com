import { YouTubeEmbed } from "./components/YouTubeEmbed";
import NodeConfEUImage from "@/images/node_conf_eu.jpg";
import books from "./books/books.json";
import talks from "./talks/talks.json";
import Image from "next/image";
import Link from "next/link";

async function getChessStats() {
  "use server"
  const res = await fetch("https://api.chess.com/pub/player/ethanarrowood/stats");

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Home() {
  const chessStats = await getChessStats();

  return (
    <div className="flex flex-col gap-4">
      {/* Introduction */}
      {/* Default: should render text above centered line */}
      {/* md: should render text and line on same line */}
      <div>
        <span className="block md:inline">
          <span role="img" aria-label="hand waving">
            👋
          </span>{" "}
          I&apos;m <h1 className="inline text-lg text-emerald-700">Ethan Arrowood</h1>, here are my highlights...
        </span>
        <span aria-hidden className="block md:inline text-center md:float-right text-emerald-700">
          ━━━━━━
        </span>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row pb-4 border-b-2 border-emerald-700">
        {/* Headshot */}
        {/* Default: should render an image of me as 2/3 the width of the page and centered */}
        <Image
          src={NodeConfEUImage}
          alt="Picture of me giving a talk at Node Conf EU"
          className="block m-auto w-2/3 rounded-xl sm:m-0 sm:w-1/3 sm:inline"
          placeholder="blur"
        />

        {/* Highlights */}
        {/* Default: should render as a vertical list of text. Each item on its own line. */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <p className="inline" role="img" aria-label="laptop">
              💻
            </p>
            <ul className="min-w-0">
              <li>
                <Link className="underline" href="https://vercel.com" target="_blank">
                  Vercel
                </Link>{" "}
                Senior Software Engineer
              </li>
              <li>
                <Link className="underline" href="https://nodejs.org" target="_blank">
                  Node.js
                </Link>{" "}
                Contributor
              </li>
              <li>
                <Link className="underline" href="https://github.com/nodejs/undici/" target="_blank">
                  Undici
                </Link>{" "}
                Maintainer
              </li>
              <li>
                <Link className="underline" href="https://tc39.es" target="_blank">
                  ECMA TC39
                </Link>{" "}
                Delegate
              </li>
              <li>
                <Link className="underline" href="https://openjsf.org" target="_blank">
                  OpenJS
                </Link>{" "}
                &{" "}
                <Link className="underline" href="https://wintercg.org" target="_blank">
                  WinterCG
                </Link>{" "}
                Collaborator
              </li>
              <li className="whitespace-nowrap text-ellipsis overflow-hidden">
                Developing{" "}
                <Link className="underline" href="https://github.com/Ethan-Arrowood/mddl" target="_blank">
                  mddl
                </Link>{" "}
                <span className="text-sm">(markdown documentation language)</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-2">
            <p className="inline" role="img" aria-label="skis and boots">
              🎿
            </p>
            <ul>
              <li>Breckenridge Ski Instructor</li>
              <li>PSIA Alpine 1 & Freestyle 1 Certified</li>
              <li className="italic text-sm">Contact me for private lesson availability!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Posts */}
      {/* Coming soon! */}

      {/* Talks */}
      <div className="flex flex-col gap-2 pb-4 border-b-2 border-emerald-700">
        <p>
          <span role="img" aria-label="microphone">
            🎤
          </span>{" "}
          Talks
        </p>
        <div className="align-center m-auto flex flex-row flex-wrap justify-center gap-4">
          {talks.slice(0, 3).map((talk) => (
            <YouTubeEmbed key={talk.id} id={talk.id} />
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div className="flex flex-col justify-center gap-2">
        {/* Currently Reading */}
        <div className="flex flex-row gap-2 m-auto">
          <p className="inline" role="img" aria-label="stack of books">
            📚
          </p>
          <ul className="min-w-0">
            <li>Currently Reading</li>
            {books
              .filter((book) => book.shelf === "currently-reading")
              .map((book) => (
                <li className="whitespace-nowrap text-ellipsis overflow-hidden" key={book.title}>
                  <Link className="underline" href={book.goodreads_link} target="_blank">
                    {book.title}
                  </Link>{" "}
                  - <span className="italic text-sm">{book.author}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Sub-section for better alignment on medium screens */}
        <div className="flex flex-row justify-around">
          {/* Chess */}
          <div className="flex flex-row gap-2">
            <p className="inline" role="img" aria-label="chess piece (pawn)">
              ♟️
            </p>
            <ul>
              <li>
                <Link className="underline" href="https://www.chess.com/member/ethanarrowood" target="_blank">
                  chess.com
                </Link>{" "}
                Stats
              </li>
              <li>Rapid: {chessStats?.chess_rapid.last.rating ?? "~1200"}</li>
              <li>Blitz: {chessStats?.chess_blitz.last.rating ?? "~700"}</li>
              <li>Daily: {chessStats?.chess_daily.last.rating ?? "~900"}</li>
              <li>Bullet: {chessStats?.chess_bullet.last.rating ?? "~900"}</li>
            </ul>
          </div>

          {/* Lifting */}
          <div className="flex flex-row gap-2">
            <p className="inline">🏋️‍♂️</p>
            <ul>
              <li>Lifting PRs</li>
              <li>Deadlift: 315lbs</li>
              <li>Squat: 225lbs</li>
              <li>Press: 145lbs</li>
              <li>Clean: 145lbs</li>
              <li>Snatch: 125lbs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
