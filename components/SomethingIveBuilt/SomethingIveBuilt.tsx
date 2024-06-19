"use client";
import Link from "next/link";

import React from "react";
import ArrowIcon from "../../components/Icons/ArrowIcon";
import Img from "../smallComp/image/Img";
import GithubIcon from "../../components/Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../components/Icons/ExternalLink";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SomethingIveBuilt = () => {
  const router = useRouter();
  return (
    <div
      id="projects"
      className="flex flex-col xl:space-y-28 space-y-12 w-full  
       lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-purple"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-background z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link
                href="https://react-music-player-coral.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-background 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src="/musicPlayer.png"
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-background opacity-80 z-10"></div>
                <Img
                  src={"/musicPlayer.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full object-cover`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-purple text-base">Main project</span>
                <Link
                  href="https://react-music-player-coral.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-purple font-bold text-xl hover:cursor-pointer">
                    Music Player
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right mb-4">
                  Music player application designed to offer users a dynamic and
                  responsive music listening experience. Built with React and
                  Redux, an intuitive interface for managing and playing music.
                </p>
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right mb-4">
                  The backend server, developed with Node.js and Express,
                  provides robust functionality for user authentication, song
                  management, and playlist creation, with all data stored in
                  MongoDB.
                </p>
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project is designed to deliver a top-tier music listening
                  experience.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Redux</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">MongoDB</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <Link
                  href="https://react-music-player-coral.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </Link>
                <GithubIcon link="https://github.com/maksymshtarkberg/react-music-player" />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-background z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link
                href={"https://ecommerce-app-9fnu.vercel.app/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-background 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"./ecomerce.jpg"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-background opacity-80 z-10"></div>
                <Img
                  src={"./ecomerce.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full object-cover`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-purple text-base">Recent project</span>
                <Link
                  href="https://ecommerce-app-9fnu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                    E-commerce Store Template
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  This project is a fully-functional e-commerce store template
                  designed to streamline the process of setting up an online
                  shop. Built with modern technologies, this template offers a
                  robust and scalable solution for businesses of all sizes. The
                  template integrates seamlessly with popular payment merchants,
                  ensuring secure and efficient transactions.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Stripe</span>
                <span className="pr-4 z-10">Sanity</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/maksymshtarkberg/ecommerce-app" />
                <Link
                  href="https://ecommerce-app-9fnu.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-background z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link
                href={"https://clinic-app-seven.vercel.app/"}
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-secondary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"./clinic.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-secondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-background opacity-80 z-10"></div>
                <Img
                  src={"./clinic.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full object-cover`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-purple text-base">Recent project</span>
                <Link
                  href={"https://clinic-app-seven.vercel.app/"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-secondary font-bold text-xl hover:cursor-pointer">
                    Beauty Clinic Appoitment Website
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-tertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Beauty clinic website template provides a comprehensive and
                  elegant solution for beauty clinics looking to enhance their
                  online presence. With its modern tech stack, integrated
                  booking system, user authentication, and multilingual support,
                  this template is designed to deliver an exceptional user
                  experience for clients and efficient management tools for
                  clinic staff.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">i18n</span>
                <span className="pr-4 z-10">GraphQL</span>
                <span className="pr-4 z-10">Descope</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <Link
                  href="https://clinic-app-seven.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </Link>
                <GithubIcon link="https://github.com/maksymshtarkberg/clinic-app" />
                {/* <ExternalLink url={"typing"} router={router} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomethingIveBuilt;
