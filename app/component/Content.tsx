import React from "react";
import Experience from "./Experience";
import MobileStickyHeader from "./MobileStickyHeader";
import Carousal from "./Carousal";

const Content = () => {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About Me"
      >
        <MobileStickyHeader title={"About Me"} />
        Assalamu Alaikum, I’m a passionate and detail-oriented Software
        Developer based in Dhaka, Bangladesh. I specialize in crafting
        efficient, scalable, and interactive web applications using
        <b> JavaScript, TypeScript, React.js, Next.js and Node.js</b>. I also
        enjoy exploring Three.js and creating immersive 3D UI experiences with
        React Three Fiber. I have a strong foundation in computer science,
        algorithms, and modern development practices.
        <br />
        <br />
        I’ve previously worked in diverse roles — from being a Software
        Developer at Cloud Production Ltd and Invariant Telecom Ltd, to a Web
        Developer at GraphicPeople. My professional experience includes -
        Building responsive, pixel-perfect UIs from Figma designs Integrating
        <b> GraphQL, REST, and Connect-Web APIs</b>, refactoring legacy code for
        performance optimization, documenting UI components with Storybook,
        collaborating in Agile teams with Git & GitHub.
        <br />
        <br />
        Alongside full-stack development, I’m increasingly focused on Machine
        Learning and AI-driven systems. I enjoy exploring how data, algorithms,
        and intelligent models can be integrated into real-world
        applications—ranging from predictive features to automation and
        decision-support tools. I’m particularly interested in applied machine
        learning, model integration in web systems, and AI-powered user
        experiences.
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Experience"
      >
        {" "}
        <MobileStickyHeader title={"Experience"} />
        <Experience />
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Projects"
      >
        <MobileStickyHeader title={"Projects"} />
        <Carousal
          title="Rent A Room"
          href={"https://rentroom-two.vercel.app/"}
          description={
            "Developed a responsive Airbnb-style room rental frontend using React.js and Next.js, featuring dynamic listings, modern UI components, and seamless user navigation."
          }
          imageSrc={"/rent-a-room-ss.png"}
          imageAlt={"Rent A Room"}
          skills={["Nextjs", "Typescript", "Tailwind Css", "Zustand"]}
        />
        <Carousal
          title="Animated Island"
          href={"https://island-delta-puce.vercel.app/"}
          description={
            "Designed and implemented a fully animated 3D island using Three.js. Optimized performance for web-based interactivity, including dynamic lighting, animations, and user-driven exploration features."
          }
          imageSrc={"/island.png"}
          imageAlt={"Animated Island"}
          skills={["Threejs"]}
        />
        <Carousal
          title="Wollito"
          href={"https://wollito.vercel.app/#/dashboard"}
          description={
            "Wollito is a modern personal finance web app designed to help users track expenses, set budgets, and understand their spending habits effortlessly. The prototype showcases clean dashboards, category-wise analytics, and an intuitive interface that makes money management simple and visual."
          }
          imageSrc={"/wollito-ss.png"}
          imageAlt={"Wollito"}
          skills={["Reactjs", "Typescript", "Bootstrap CSS"]}
        />
      </section>
    </>
  );
};

export default Content;
