import React from "react";
import experience from "../content/Experience";

const Content = () => {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        I’m a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        creating experiences that not only look great but are meticulously built
        for performance and usability. Currently, I am a Senior Front-End
        Engineer at Klaviyo, specializing in accessibility. I contribute to the
        creation and maintenance of UI components that power Klaviyo’s frontend,
        ensuring our platform meets web accessibility standards and best
        practices to deliver an inclusive user experience. In the past, I have
        had the opportunity to develop software across a variety of settings —
        from advertising agencies and large corporations to start-ups and small
        digital product studios. Additionally, I also released a comprehensive
        video course a few years ago, guiding learners through building a web
        app with the Spotify API. In my spare time, I’m usually climbing,
        reading, hanging out with my wife and two cats, or running around Hyrule
        searching for Korok seeds K o r o k s e e d s . Experience 2024 —
        Present Senior Frontend Engineer, Accessibility · I’m a developer
        passionate about crafting accessible, pixel-perfect user interfaces that
        blend thoughtful design with robust engineering. My favorite work lies
        at the intersection of design and development, creating experiences that
        not only look great but are meticulously built for performance and
        usability. Currently, I am a Senior Front-End Engineer at Klaviyo,
        specializing in accessibility. I contribute to the creation and
        maintenance of UI components that power Klaviyo’s frontend, ensuring our
        platform meets web accessibility standards and best practices to deliver
        an inclusive user experience. In the past, I have had the opportunity to
        develop software across a variety of settings — from advertising
        agencies and large corporations to start-ups and small digital product
        studios. Additionally, I also released a comprehensive video course a
        few years ago, guiding learners through building a web app with the
        Spotify API. In my spare time, I’m usually climbing, reading, hanging
        out with my wife and two cats, or running around Hyrule searching for
        Korok seeds K o r o k s e e d s . Experience 2024 — Present Senior
        Frontend Engineer, Accessibility ·
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div>
          <ol className="group/list">
            {experience.map((item) => (
              <li className="mb-12 py-1.5" key={item.title}>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 hover:shadow-md duration-300 p-6 bg-white rounded-md">
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
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {item?.skills?.map((skill) => {
                        return (
                          <li className="mr-1.5 mt-2" key={skill}>
                            <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
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
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        Apple Developed and styled interactive web apps for Apple Music,
        including the user interface of Apple Music’s embeddable web player
        widget for in-browser user authorization and full song playback.
        MusicKit.js 9to5Mac The Verge Ember SCSS JavaScript MusicKit.js 2016 —
        2017 Developer · Scout Studio Collaborated with other student designers
        and engineers on pro-bono projects to create new brands, design systems,
        and websites for organizations in the community. Jekyll SCSS JavaScript
        WordPress July — Dec 2016 Software Engineer Co-op · Starry Worked with
        the UI team to engineer and improve major features of Starry’s
        customer-facing Android app. Android App ScreenTime 2.0 Cordova Backbone
        JavaScript CSS July — Dec 2015 Creative Technologist Co-op · MullenLowe
        U.S. Developed, maintained, and shipped production code for client
        websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S.
        Department of Defense, and more. HTML CSS JavaScript jQuery View Full
        Résumé Projects Apple Developed and styled interactive web apps for
        Apple Music, including the user interface of Apple Music’s embeddable
        web player widget for in-browser user authorization and full song
        playback. MusicKit.js 9to5Mac The Verge Ember SCSS JavaScript
        MusicKit.js 2016 — 2017 Developer · Scout Studio Collaborated with other
        student designers and engineers on pro-bono projects to create new
        brands, design systems, and websites for organizations in the community.
        Jekyll SCSS JavaScript WordPress July — Dec 2016 Software Engineer Co-op
        · Starry Worked with the UI team to engineer and improve major features
        of Starry’s customer-facing Android app. Android App ScreenTime 2.0
        Cordova Backbone JavaScript CSS July — Dec 2015 Creative Technologist
        Co-op · MullenLowe U.S. Developed, maintained, and shipped production
        code for client websites. Clients included JetBlue, Lovesac, U.S.
        Cellular, U.S. Department of Defense, and more. HTML CSS JavaScript
        jQuery View Full Résumé Projects
      </section>
    </>
  );
};

export default Content;
