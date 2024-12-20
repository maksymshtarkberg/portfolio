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
import { useMemo, useRef, useState } from "react";
import Link from "next/link";

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
  description2,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["JavaScript", "TypeScript", "ReactJS"];
  const leftListsIcons = [JSIcon, TSIcon, ReactIcon];
  const rightLists = ["Node.js", "Express", "NextJS"];
  const rightListsIcons = [NodeJsIcon, ExpressJsIcon, NextJsIcon];

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const borderRef = useRef<HTMLDivElement>(null);

  const handleHoverImgBorder = () => {
    if (borderRef.current) {
      borderRef.current.classList.add(
        "border-purple-600",
        "sm:border-2",
        "rounded-md",
        "transition-transform",
        "duration-300",
        "sm:w-full",
        "sm:h-[192px]"
      );
      borderRef.current.style.transform = "translate(0%, 0%)";
    }
  };

  const removeHover = () => {
    if (borderRef.current) {
      borderRef.current.classList.remove(
        "border-purple-600",
        "sm:border-2",
        "rounded-md",
        "transition-transform",
        "duration-300",
        "sm:w-full",
        "sm:h-[192px]"
      );
      borderRef.current.style.transform = "translate(20%, 20%)";
    }
  };

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
      <div className="h-full">
        <div className="w-full h-full absolute">
          {img && (
            <Image
              width={250}
              height={250}
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center opacity-60"
              )}
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
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex px-5 p-5 lg:p-10"
          )}
        >
          <>
            <div className="flex">
              <div className="flex flex-col">
                <p
                  className={cn("font-sans text-lg lg:text-3xl font-bold z-10")}
                >
                  {title}
                </p>
                {description && (
                  <p className="font-sans font-normal md:max-w-sm lg:text-base text-md text-[#C1C2D3] z-10 mt-6 p-2 md:bg-transparent md:rounded-none bg-slate-900 rounded-lg">
                    {description}
                  </p>
                )}
                {description2 && (
                  <p className="font-sans font-normal md:max-w-sm lg:text-base text-md text-[#C1C2D3] z-10 mt-6 p-2 md:bg-transparent md:rounded-none bg-slate-900 rounded-lg">
                    {description2}
                  </p>
                )}
              </div>
              {id === 1 && (
                <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 h-0 md:block hidden z-50	left-16">
                  <div
                    className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-3/5 h-[200px] border-2 border-purple translate-x-5 
               translate-y-5 rounded"
                  ></div>
                  <div className="absolute w-full h-[200px] duration-300 rounded overflow-hidden">
                    <Link
                      href={"https://www.linkedin.com/in/maksym-shtarkberg/"}
                      target={"_blank"}
                      rel="noreferrer"
                      className="cursor-pointer "
                    >
                      <div className="absolute w-5/6  rounded overflow-hidden">
                        <img
                          src={"/me.jpg"}
                          className={"object-contain rounded-lg h-52"}
                          alt="My Image Not Found"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-2 pr-6">
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-3 cursor-pointer">
                {leftLists.map((item, i) => {
                  const Icon = leftListsIcons[i];
                  return (
                    <span
                      key={i}
                      className={cn(
                        "lg:py-3 lg:px-2 py-2 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] flex items-center",
                        selectedItem === item
                          ? "bg-purple-500 text-white shadow-[0_0_8px_4px_rgba(99,102,241,0.2)] bg-[#3e4372] shadow-indigo-400 transition ease-in	duration-300 drop-shadow-2xl"
                          : "opacity-50 lg:opacity-100"
                      )}
                      onClick={() => handleItemClick(item)}
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
                      className={cn(
                        "lg:py-3 lg:px-2 py-2 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] flex items-center cursor-pointer",
                        selectedItem === item
                          ? "shadow-[0_0_8px_4px_rgba(99,102,241,0.2)] text-white bg-[#3e4372] shadow-indigo-400 transition ease-in	duration-300 drop-shadow-2xl"
                          : "opacity-50 lg:opacity-100"
                      )}
                      onClick={() => handleItemClick(item)}
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
