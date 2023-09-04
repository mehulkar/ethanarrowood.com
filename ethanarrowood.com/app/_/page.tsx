import Link from "next/link";
import Image from 'next/image';
import headshot from './node_conf_eu.jpg';

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export default async function Index () {
    return (
        <>
            <div className="block pb-2 w-full text-lg">Hello, I'm <h1 className="inline text-2xl text-emerald-800">Ethan Arrowood</h1><span className="float-right text-emerald-700">━━━━━━</span></div>
            <Image
                src={headshot}
                alt="Picture of me giving a talk at Node Conf EU"
                className="rounded-xl float-left mt-1.5 mr-4 w-2/5"
                placeholder="blur"
                blurDataURL={rgbDataURL(129, 133, 137)}
            />
            <p className="text-lg pb-2">I'm currently a full-time, senior software engineer for <Link className="underline" href="https://vercel.com">Vercel</Link>. I work on a variety of projects, most notably maintaining the Vercel CLI. I am an active contributor to Node.js, and an active member of the WinterCG and the OpenJS Foundation leading initiatives to improve the interoperability of JavaScript runtime environments. Occasionally, I professionally speak about my open source work at various international conferences such as <Link className="underline" href="https://youtu.be/fih5Yt3UiNg">OpenJS World</Link> and <Link className="underline" href="https://youtu.be/Koy8XkDSf30">NodeConfEU</Link>.<br></br><br></br>During the winter months, I am a part-time professional ski instructor for Vail Resorts. I have complete my PSIA Alpine Level 1 and Freestyle Level 1 certifications. <i>I'm available for private bookings throughout the ski season at Breckenridge Resort.</i></p>
            <hr className="border border-emerald-700"/>
        </>
    )
}
