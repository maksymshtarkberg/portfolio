import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
import Link from "next/link";

export default function MonoSoftware() {
  const tasks = [
    {
      text: "Designed and Built user-friendly customizable static web application using ReactJS, TypeScript and TailwindCSS",
      keywords: ["ReactJS", "TailwindCSS", "TypeScript"],
    },
    {
      text: "Developed back-end architecture on Node.js with accordance to industry and company standards.",
      keywords: ["back-end architecture", "Node.js"],
    },
    {
      text: "Interfaced with developers on a daily basis, providing technological expertise. Learned multiple threading, concurrency, technologies and their impact on application concurrency back-end business logic and API",
      keywords: ["threading", "concurrency", "business logic", "API"],
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
            Apr 2022 - Jan 2023
          </span>
          <Link
            href={"https://mono.software/"}
            className="font-mono text-xs text-purple hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            mono.software
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
