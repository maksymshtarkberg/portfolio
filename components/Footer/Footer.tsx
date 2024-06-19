import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

const ClickableIcon = (props: any) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-purple fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/maksymshtarkberg", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/maksym-shtarkberg",
    Icon: LinkedinIcon,
  },
];

export default function Fotter(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-background flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => {
          return (
            <ClickableIcon
              key={index}
              href={iconData.href}
              Icon={iconData.Icon}
            />
          );
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-primary
    text-sm  space-y-2"
        >
          <span className="group-hover:text-purple sm:text-sm text-xs">
            Built by Maksym Shtarkberg
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-purple">
            <GithubIcon
              className={
                "w-4 h-4 text-primary fill-current group-hover:text-purple"
              }
            />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
