import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import Link from "next/link";
import type { ReactNode } from "react";

import { Placeholder } from "./Placeholder";

const experiences: {
  dateRange: string;
  position: string;
  company: string;
  summary: ReactNode | null;
  supplementary: {
    year: string;
    role?: string;
    content: ReactNode | null;
  }[];
  technologies: string[];
}[] = [
  {
    dateRange: "2025-Present",
    position: "Senior Software Engineer",
    company: "Synacy, Inc.",
    summary: (
      <>
        <p>
          Involved in technical discussions shaping new projects under the
          team's domains.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 marker:text-blue-300">
          <li>
            Set up an internal cache system that unifies our business data from different third-party platforms
          </li>
          <li>
            Integrated alerts to our scheduled tasks and functions to aid on-call support.
          </li>
          <li>
            Spearheaded loading legacy data from Podio to our internal service.
            This includes verifying and organizing data according to the latest
            business rules.
          </li>
          <li>
            Maintained existing Make automations that synced data to Airtable.
          </li>
        </ul>
      </>
    ),
    supplementary: [
      {
        year: "2023-2025",
        role: "Software Engineer",
        content: (
          <>
            <p>
              Joined as an engineer working remotely from Metro Manila.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 marker:text-blue-300">
              <li>
                Set up foundational deployment code for a new app using AWS CDK.
              </li>
              <li>
                Built workflows that synced data from internal apps to third-party services.
              </li>
              <li>
                Enhanced location queries for field engineers by integrating map visualization.
              </li>
              <li>
                Refactored legacy code to better define production and staging
                configuration.
              </li>
              <li>
                Facilitated an Agile learning session with interns.
              </li>
            </ul>
          </>
        ),
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
    summary: (
      <>
        <p>
          Part of the foundational team that integrated Loadshift into
          Freightlancer, <span className="font-mono text-blue-500 dark:text-blue-400">Freelancer.com</span>'s freight marketplace platform.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 marker:text-blue-300">
          <li>Took charge of the domain migration</li>
          <li>
            Created an internal QMS used by operation agents in managing freight
            jobs posted
          </li>
          <li>
            Implemented saved filters for the browse page with ElasticSearch
          </li>
          <li>
            Streamlined use of Google Maps API that reduced costs by around
            $2,000 AUD/month
          </li>
          <li>
            Conceptualized a driving mode AI chat assistant feature using OpenAI
          </li>
          <li>Kicked off writing UI tests using Protractor</li>
        </ul>
      </>
    ),
    supplementary: [],
    technologies: ["Angular", "Typescript", "PHP", "MySQL", "RabbitMQ"],
  },
  {
    dateRange: "2019-2021",
    position: "Frontend Web Developer",
    company: "University of the Philippines Diliman",
    summary: (
      <>
        <p>
          Worked with a team from UP Training Center for Applied Geodesy and
          Photogrammetry to create a GIS web portal for a land use and zoning
          research and development project.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 marker:text-blue-300">
          <li>
            Designed and coded the different views of the site
          </li>
          <li>
            Created data visualization views with geographical and statistical
            data using Django and GeoNode
          </li>
        </ul>
      </>
    ),
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
            className="group flex flex-col gap-3 px-7 lg:px-24 2xl:-mx-7 2xl:px-7 py-0 2xl:py-5 rounded-lg lg:hover:bg-neutral-50/30 lg:hover:shadow-md lg:hover:shadow-mist-300/50 dark:lg:hover:bg-slate-600/10 dark:lg:hover:shadow-slate-900/50 transition-all duration-300"
          >
            <div className="grid grid-cols-4">
              <div className="font-mono uppercase text-sm">
                <p>{experience.dateRange}</p>
              </div>
              <div className="col-span-3">
                <p className="font-mono text-lg/snug lg:group-hover:text-blue-500 dark:lg:group-hover:text-blue-400 transition-colors duration-300">{experience.company}</p>
                <p className="font-bold">{experience.position}</p>
              </div>
              <div className="col-start-2 col-span-3 mt-1">
                {experience.summary ?? <Placeholder rows={3} />}
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
                    {supplementary.content ?? <Placeholder rows={3} />}
                  </div>
                </div>
              ))}

            <div className="grid grid-cols-4">
              <div className="col-start-2 col-span-3 pt-2 flex flex-wrap gap-2">
                {experience.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center px-3 py-1 text-sm font-mono font-medium bg-blue-200 dark:bg-blue-900 dark:text-blue-200 rounded-full"
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
          className="flex items-center px-7 2xl:px-0 gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <span>View my full resume</span>
          <ArrowRightIcon className="size-5 text-blue-500 dark:text-blue-400" />
        </Link>
      </section>
    </div>
  );
}
