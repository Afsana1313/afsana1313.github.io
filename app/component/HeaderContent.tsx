import React from "react";
import intro from "../content/Intro";

const navMenu = ["about", "experience", "projects"];

const navContent = navMenu.map((item) => {
  return (
    <li key={item}>
      <a className="group flex items-center py-3 active" href={`#${item}`}>
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {item}
        </span>
      </a>
    </li>
  );
});

const HeaderContent = () => {
  return (
    <header className="left-container lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-cyan-950 sm:text-5xl">
          {intro.title}
        </h1>
        <div>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {intro.tagLine}
          </h2>
          <p className="mt-4 max-w-xs leading-normal">{intro.shortBio}</p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">{navContent}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
