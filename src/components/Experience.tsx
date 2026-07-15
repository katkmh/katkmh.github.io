import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { Placeholder } from "./Placeholder";

const experiences = [
  {
    dateRange: "2025-Present",
    position: "Senior Software Engineer",
    company: "Synacy, Inc.",
    summary: null,
    supplementary: [
      {
        year: "2023-2025",
        role: "Software Engineer",
        content: null,
      },
    ],
    technologies: [
      "Angular",
      "Typescript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "AWS CloudFormation",
      "AI-driven workflows",
    ],
  },
  {
    dateRange: "2021-2023",
    position: "Software Engineer",
    company: "Loadshift",
    summary: null,
    supplementary: [],
    technologies: ["Angular", "Typescript", "PHP", "MySQL", "RabbitMQ"],
  },
  {
    dateRange: "2019-2021",
    position: "Frontend Web Developer",
    company: "University of the Philippines Diliman",
    summary: null,
    supplementary: [],
    technologies: ["Django", "Geonode", "Javascript", "jQuery", "HTML + CSS"],
  },
];

export function Experience() {
  return (
    <div>
      <section id="experience" className="flex flex-col gap-10 2xl:gap-8">
        {experiences.map((experience, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 px-7 lg:px-24 2xl:-mx-7 2xl:px-7 py-0 2xl:py-5 rounded-lg hover:bg-neutral-50/30 hover:shadow-md hover:shadow-mist-300/50 transition-all duration-300"
          >
            <div className="grid grid-cols-4">
              <div className="font-mono uppercase text-sm">
                <p>{experience.dateRange}</p>
              </div>
              <div className="col-span-3">
                <p className="font-mono text-lg/snug">{experience.company}</p>
                <p className="font-bold">{experience.position}</p>
              </div>
              <div className="col-start-2 col-span-3 mt-1">
                {experience.summary ? (
                  <p>{experience.summary}</p>
                ) : (
                  <Placeholder rows={3} />
                )}
              </div>
            </div>

            {experience.supplementary &&
              experience.supplementary.map((supplementary, j) => (
                <div key={j} className="grid grid-cols-4">
                  <div>
                    <p className="font-mono uppercase text-sm">
                      {supplementary.year}
                    </p>
                  </div>
                  {supplementary.role && (
                    <div className="col-start-2 col-span-3">
                      <p className="font-bold">{supplementary.role}</p>
                    </div>
                  )}
                  <div className="col-start-2 col-span-3 mt-1">
                    {supplementary.content ? (
                      <p>{supplementary.content}</p>
                    ) : (
                      <Placeholder rows={3} />
                    )}
                  </div>
                </div>
              ))}

            <div className="grid grid-cols-4">
              <div className="col-start-2 col-span-3 pt-2 flex flex-wrap gap-2">
                {experience.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center px-3 py-1 text-sm font-mono font-medium bg-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="flex items-center px-7 2xl:px-0 gap-2 hover:text-blue-500 transition-colors duration-300"
        >
          <span>View my resume</span>
          <ArrowRightIcon className="size-5 text-blue-500" />
        </Link>
      </section>
    </div>
  );
}
