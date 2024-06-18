import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
import Link from "next/link";

export default function Noviopus() {
  const tasks = [
    {
      text: "Worked on the front-end development in the startup team using Next.js, SCSS, Redux, i18n.",
      keywords: ["Next.js", "SCSS", "Redux", "i18n"],
    },
    {
      text: "Migrated marketing app from React to Next.js, implemented i18next to Next.js with dynamic translation route.",
      keywords: ["migrated", "dynamic translation route"],
    },
    {
      text: "Developed project architecture strategy and SEO optimization.",
      keywords: ["project architecture", "SEO optimization"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and interacted in components development process.",
      keywords: ["development process"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-white sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-white">
            Sep 2023 - May 2024
          </span>
          <Link
            href={"https://noviopus.com/"}
            className="font-mono text-xs text-purple hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            noviopus.com
          </Link>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-purple flex-none"} />
                <span
                  className="text-white sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
