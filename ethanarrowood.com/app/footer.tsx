import Link from "next/link";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className="mt-4 py-4 border-t-2 border-emerald-700">
      <div className="float-left flex flex-row gap-2">
        <p>
          <Link className="underline inline" href="https://github.com/ethan-arrowood">
            <Image height={24} width={24} src={"/images/logos/github-mark/github-mark.png"} alt="GitHub Logo icon"></Image>
          </Link>
        </p>
        <p>
          <Link className="underline inline" href="https://twitter.com/Arrowood-Tech">
            <Image height={24} width={24} src={"/images/logos/x-logo/logo-black.png"} alt="Twitter/X Logo icon"></Image>
          </Link>
        </p>
      </div>
      <p className="float-right inline-flex items-center">
        Made with <HeartIcon className="inline-block w-5 h-5 mx-1" /> by Ethan
      </p>
    </div>
  );
}
