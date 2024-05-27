"use client";
import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../components/Icons/ArrowIcon";
import MeGaDev from "./Descriptions/MeGaDev";
import Freelance from "./Descriptions/Freelance";

import Noviopus from "./Descriptions/Noviopus";
import MonoSoftware from "./Descriptions/MonoSoftware";

export default function WhereIHaveWorked() {
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Noviopus":
        return <Noviopus />;
      case "MonoSoftware":
        return <MonoSoftware />;
      case "MeGaDev":
        return <MeGaDev />;
      case "Freelance":
        return <Freelance />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Noviopus");
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-purple"}
          />
        </div>

        <span className="text-white opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props: any) => {
  const [barPosition, setBarPosition] = React.useState<number>(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState<number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false, false, false]);
  const barRef = React.useRef<HTMLDivElement>(null);

  const CompanyButton = (props: any) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-purple
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "bg-ResumeButtonHover text-purple"
                 : "text-white"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center lg:h-80 sm:h-auto"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-auto w-34 md:h-[168px] translate-y-1 md:w-0.5  
        rounded md:order-1 order-2 self-start"
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-purple `}
        ></motion.div>
      </div>

      {/* // ? Companies name as buttons */}
      <div className="flex flex-col justify-around md:order-2 order-1 space-y-1 pl-8 md:pl-0 self-start">
        <div className="flex flex-row md:flex-col flex-grow">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="Noviopus"
            BarPosition={-12}
            BarAvobePosition={1}
            DescriptionJob="Noviopus"
            CompanyNameBackgroundColorGreen={[true, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="MonoSoftware"
            BarPosition={32}
            BarAvobePosition={129}
            DescriptionJob="MonoSoftware"
            CompanyNameBackgroundColorGreen={[false, true, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="MeGaDev"
            BarPosition={76}
            BarAvobePosition={257}
            DescriptionJob="MeGaDev"
            CompanyNameBackgroundColorGreen={[false, false, true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="Freelance"
            BarPosition={120}
            BarAvobePosition={385}
            DescriptionJob="Freelance"
            CompanyNameBackgroundColorGreen={[false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
      </div>
    </div>
  );
};
