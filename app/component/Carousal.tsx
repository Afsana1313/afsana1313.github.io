import React from "react";
import Skill from "./Skill";

interface CourseCardProps {
  title: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  skills: string[];
}

export default function CourseCard({
  title,
  href,
  description,
  imageSrc,
  imageAlt,
  skills
}: CourseCardProps) {
  return (
    <div className="mb-12 cursor-pointer">
      <div className="group relative grid gap-4 pb-1 transition-all hover:shadow-md sm:grid-cols-8 sm:gap-8 md:gap-4 p-6 items-start">
        {/* Text Section */}
        <div className="z-10 sm:order-2 sm:col-span-6">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href={href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="text-gray-900 text-2xl">{title}</span>
          </a>

          <p className="mt-2 text-sm leading-normal">{description}</p>

          <ul
            className="mt-2 flex flex-wrap mb-4"
            aria-label="Technologies used"
          >
            {skills?.map((skilltag) => (
              <Skill key={skilltag} skilltag={skilltag} />
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="sm:col-span-2 flex justify-center items-start">
          <img
            alt={imageAlt}
            loading="lazy"
            src={imageSrc}
            className="w-full h-auto max-w-[200px] object-contain rounded transition"
          />
        </div>
      </div>
    </div>
  );
}
