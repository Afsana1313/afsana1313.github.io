import React from "react";

interface CourseCardProps {
  title: string;
  href: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CourseCard({
  title,
  href,
  description,
  imageSrc,
  imageAlt
}: CourseCardProps) {
  return (
    <div className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

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
        </div>

        <div className="flex justify-center items-center">
          <img
            alt={imageAlt}
            loading="lazy"
            width="200"
            className="aspect-video object-cover rounded transition"
            src={imageSrc}
          />
        </div>
      </div>
    </div>
  );
}
