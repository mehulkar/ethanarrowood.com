import VercelLogo from "./logos/vercel-logotype-dark.png";
import MicrosoftLogo from "./logos/microsoft-logo.png";
import Image, { StaticImageData } from "next/image";
import GitHubLogo from "./logos/GitHub_Logo.png";
import { ReactNode } from "react";

interface Experience {
  name: string;
  logo: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  team: string;
  dateRange: string;
  description: string | ReactNode;
}

const ExperienceSection: React.FC<{ experience: Experience }> = ({ experience }) => (
  <section className="mx-auto flex w-full flex-col gap-y-1 px-1 py-2">
    <div className="flex w-full flex-col gap-x-4 sm:flex-row">
      <Image
        src={experience.logo.src}
        alt={experience.logo.alt}
        className="h-auto w-1/2 flex-none object-contain sm:w-1/5"
        placeholder="blur"
      />
      <div className="flex w-full flex-col justify-between">
        <p className="text-2xl sm:text-3xl">{experience.title}</p>
        <p className="text-xl italic sm:text-2xl">{experience.team}</p>
      </div>
      <p className="whitespace-nowrap text-gray-500 sm:self-center sm:text-lg">{experience.dateRange}</p>
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
            Core platform engineer developing zero-config experiences for a variety of frameworks, runtimes, products,
            and more. Notably, a maintainer for the Vercel CLI and the Vercel Azure DevOps Extension.
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
              Developed innovative solutions for Microsoft enterprise partner&apos;s most difficult business challenges.
              Championed the User Interface Engineering Fundamentals group.
            </p>
            <p>Notable, public projects include:</p>
            <ul className="ml-8 list-inside list-disc">
              <li>
                <strong>
                  <a href="https://www.healthequip.com/">HealthEquip</a>
                </strong>{" "}
                - Connecting individuals and organizations who have personal protective equipment (PPE) with the
                hospitals who need it most. Co-developed with Merit Solutions. Predominantly worked on the Vue web
                application.
              </li>
              <li>
                <strong>
                  <a href="https://github.com/Azure/platform-chaos">Platform Chaos</a>
                </strong>{" "}
                - a Node.js SDK for building services capable of injecting chaos into PaaS offerings.
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
              Taught students how to use Git and the GitHub platform. Mentored individuals interested in contributing to
              open source projects. Attended <strong>GitHub Universe 2018</strong> in San Francisco, California on
              behalf of the program.
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
