import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
import Link from "next/link";
export default function MeGaDev() {
  const tasks = [
    {
      text: "Leading the development of the responsive and user-friendly Single Page Applications (SPA).",
      keywords: ["Single Page Applications"],
    },
    {
      text: "Worked with a team of six developers to build a marketing applications, an ambitious startup originating from England, London.",
      keywords: ["six developers", "ambitious startup"],
    },
    {
      text: "Performed unit/integration testing.",
      keywords: ["unit/integration"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-white sm:text-lg text-sm font-Arimo tracking-wide">
            Front-End Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-white">
            Jan 2021 - Mar 2022
          </span>
          <Link
            href={"https://megadevllc.com/"}
            className="font-mono text-xs text-purple hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            megadevllc.com
          </Link>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
