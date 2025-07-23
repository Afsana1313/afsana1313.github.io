import React from "react";
import experience from "../content/Experience";

const Experience = () => {
  return (
    <div>
      <ol className="group/list">
        {experience.map((item) => (
          <li className="mb-12" key={item.title}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:shadow-md duration-300 p-6 rounded-md">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block "></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={`${item?.start}— ${item?.end}`}
              >
                {item?.start} — {item?.end}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-blue-950">
                  <div>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {item?.title}
                      <span className="inline-block ms-1 text-cyan-600">
                        {item?.company}
                      </span>
                    </span>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  {item?.description}
                </p>
                <ul
                  className="mt-2 flex flex-wrap mb-4"
                  aria-label="Technologies used"
                >
                  {item?.skills?.map((skill) => {
                    return (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-600 ">
                          {skill}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      {/* <div className="mt-12">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
                View Full{" "}
                <span className="inline-block">
                  Résumé
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div> */}
    </div>
  );
};

export default Experience;
