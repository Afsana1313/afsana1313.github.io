import React from "react";
import Experience from "./Experience";

const Content = () => {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About Me"
      >
        Assalamu Alaikum, I’m a passionate and detail-oriented Software
        Developer based in Dhaka, Bangladesh. I specialize in crafting
        efficient, scalable, and interactive web applications using JavaScript,
        TypeScript, React.js, Next.js and Node.js. I also enjoy exploring
        Three.js and creating immersive 3D UI experiences with React Three
        Fiber. I have a strong foundation in computer science, algorithms, and
        modern development practices.
        <br />
        <br />
        I’ve previously worked in diverse roles — from being a Software
        Developer at Cloud Production Ltd and Invariant Telecom Ltd, to a Web
        Developer at GraphicPeople. My professional experience includes -
        Building responsive, pixel-perfect UIs from Figma designs Integrating
        GraphQL, REST, and Connect-Web APIs, refactoring legacy code for
        performance optimization, documenting UI components with Storybook,
        collaborating in Agile teams with Git & GitHub.
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Experience"
      >
        <Experience />
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Projects"
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
