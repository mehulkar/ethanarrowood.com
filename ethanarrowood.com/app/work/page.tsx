import Image, { StaticImageData } from "next/image";
import MicrosoftLogo from "./logos/microsoft-logo.png";
import VercelLogo from "./logos/vercel-logotype-dark.png";
import GitHubLogo from "./logos/GitHub_Logo.png";
import { ReactNode } from "react";

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

interface Experience {
  logo: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  team: string;
  dateRange: string;
  description: string | ReactNode;
}
const ExperienceSection: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <section className="mx-auto flex flex-col w-full gap-y-1 px-1 py-2">
    <div className="flex flex-col sm:flex-row w-full gap-x-4">
      <Image
        src={experience.logo.src}
        alt={experience.logo.alt}
        className="flex-none object-contain w-1/2 sm:w-1/5 h-auto"
        placeholder="blur"
      />
      <div className="flex flex-col w-full justify-between">
        <p className="text-2xl sm:text-3xl">{experience.title}</p>
        <p className="text-xl sm:text-2xl italic">{experience.team}</p>
      </div>
      <p className="sm:text-lg text-gray-500 sm:self-center whitespace-nowrap">
        {experience.dateRange}
      </p>
    </div>
    <div className="text-md sm:text-lg">{experience.description}</div>
  </section>
);

export default function Work() {
  const experiences: {
    current: Experience[];
    previous: Experience[];
  } = {
    current: [
      {
        name: "vercel",
        logo: {
          src: VercelLogo,
          alt: "Dark Vercel Logo",
        },
        title: "Senior Software Engineer",
        team: "Team Zero-Config",
        dateRange: "2022 ― *",
        description: (
          <p>
            Core platform engineer developing zero-config experiences for a
            variety of frameworks, runtimes, products, and more. Notably, a
            maintainer for the Vercel CLI and the Vercel Azure DevOps Extension.
          </p>
        ),
      },
    ],
    previous: [
      {
        name: "microsoft",
        logo: {
          src: MicrosoftLogo,
          alt: "Microsoft Logo",
        },
        title: "Software Engineer II",
        team: "Commercial Software Engineering",
        dateRange: "2019 ― 2022",
        description: (
          <>
            <p>
              Developed innovative solutions for Microsoft enterprise
              partner&apos;s most difficult business challenges. Championed the
              User Interface Engineering Fundamentals group.
            </p>
            <p>Notable, public projects include:</p>
            <ul className="ml-8 list-inside list-disc">
              <li>
                <strong>
                  <a href="https://www.healthequip.com/">HealthEquip</a>
                </strong>{" "}
                - Connecting individuals and organizations who have personal
                protective equipment (PPE) with the hospitals who need it most.
                Co-developed with Merit Solutions. Predominantly worked on the
                Vue web application.
              </li>
              <li>
                <strong>
                  <a href="https://github.com/Azure/platform-chaos">
                    Platform Chaos
                  </a>
                </strong>{" "}
                - a Node.js SDK for building services capable of injecting chaos
                into PaaS offerings.
              </li>
            </ul>
          </>
        ),
      },
      {
        name: "github",
        logo: {
          src: GitHubLogo,
          alt: "GitHub Logo",
        },
        title: "Campus Expert",
        team: "Education",
        dateRange: "2017 ― 2019",
        description: (
          <>
            <p>
              Taught students how to use Git and the GitHub platform. Mentored
              individuals interested in contributing to open source projects.
              Attended <strong>GitHub Universe 2018</strong> in San Francisco,
              California on behalf of the program.
            </p>
          </>
        ),
      },
    ],
  };
  return (
    <>
      <p className="text-gray-500">Current:</p>
      {experiences.current.map((experience) => (
        <ExperienceSection experience={experience} key={experience.name} />
      ))}
      <hr className="my-8 border border-emerald-700" />
      <p className="text-gray-500">Previous:</p>
      {experiences.previous.map((experience) => (
        <ExperienceSection experience={experience} key={experience.name} />
      ))}
    </>
  );
}
