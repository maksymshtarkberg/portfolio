import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelance() {
  const tasks = [
    {
      text: "Worked with numerous e-commerce projects for small businesses, focusing on optimizing their online presence and increasing sales. ",
      keywords: ["e-commerce", "increasing sales"],
    },
    {
      text: "Successfully implemented various digital marketing strategies, improving user engagement and driving significant revenue growth.",
      keywords: ["marketing strategies", "revenue growth"],
    },
    {
      text: "Creating customized scripts for pulling, managing and refactoring files from Clouds.",
      keywords: ["scripts"],
    },
    {
      text: "Daily communications and interactions with a non-developers to solve their problems by providing technological solutions and expertise.",
      keywords: ["non-developers"],
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
            June 2021 - present
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-purple flex-none"} />
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
