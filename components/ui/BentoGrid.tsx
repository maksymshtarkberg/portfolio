"use client";

import { cn } from "@/utils/cn";

import GridGlobe from "./GridGlobe";
import Image from "next/image";
import JSIcon from "../Icons/JsIcon";
import ReactIcon from "../Icons/ReactIcon";
import TSIcon from "../Icons/TsIcon";
import NodeJsIcon from "../Icons/NodeJsIcon";
import GoIcon from "../Icons/GoIcon";
import NextJsIcon from "../Icons/NextJsIcon";
import ExpressJsIcon from "../Icons/ExpressJsIcon";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["JavaScript", "TypeScript", "ReactJS"];
  const leftListsIcons = [JSIcon, TSIcon, ReactIcon];
  const rightLists = ["Node.js", "Express", "NextJS"];
  const rightListsIcons = [NodeJsIcon, ExpressJsIcon, NextJsIcon];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              width={250}
              height={250}
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className="absolute right-0 -bottom-5">
          {spareImg && (
            <Image
              width={250}
              height={250}
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-2 pr-6">
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-3">
                {leftLists.map((item, i) => {
                  const Icon = leftListsIcons[i];
                  return (
                    <span
                      key={i}
                      className="lg:py-3 lg:px-2 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E] flex items-center"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item}
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-3">
                {rightLists.map((item, i) => {
                  const Icon = rightListsIcons[i];
                  return (
                    <span
                      key={i}
                      className="lg:py-3 lg:px-2 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E] flex items-center"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
