"use client";
import React, { useState, useEffect } from "react";
import intro from "../content/Intro";
import SocialMediaContainer from "./SocialMediaContainer";
import DownloadCv from "./DownloadCv";

const navMenu = ["about", "experience", "projects"];

const HeaderContent = () => {
  return (
    <header className="left-container lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-cyan-950 sm:text-5xl">
          {intro.title}
        </h1>
        <div>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-blue-950 sm:text-xl">
            {intro.tagLine}
          </h2>
          <p className="mt-4 max-w-xs leading-normal">{intro.shortBio}</p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <NavContent />
            </ul>
          </nav>
          <DownloadCv />
        </div>
      </div>
      <SocialMediaContainer />
    </header>
  );
};

const NavContent = () => {
  const [activeMenu, setActiveMenu] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      for (const id of navMenu) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveMenu(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return navMenu.map((item) => {
    return (
      <li key={item} data-value={item}>
        <a className="group flex items-center py-3 active" href={`#${item}`}>
          <span
            className={`${
              activeMenu == item && "w-16"
            } nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:text-blue-950 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
          ></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-950 group-focus-visible:text-slate-200">
            {item}
          </span>
        </a>
      </li>
    );
  });
};

export default HeaderContent;
