import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="flex flex-col justify-center space-y-4 w-full h-96 items-center pt-8"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-purple" />
        <div className="flex flex-row space-x-2 items-center">
          <span className=" font-sans text-purple text-base">
            How you can connect with me?
          </span>
        </div>
      </div>
      {/* // ?   Contact*/}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Contact
      </span>
      <div className="px-6 sm:px-16 md:px-0 md:w-[600px]">
        <p className="font-Header tracking-wider text-gray-400 text-center">
          I&apos;m always eager for new opportunities, so my inbox is open.
        </p>
        <p className="font-Header tracking-wider text-gray-400 text-center">
          If you have any questions or just want to say hello, I&apos;ll do my
          best to respond promptly!
        </p>
      </div>

      <div className="pt-4">
        <a
          href="mailto:starkberg@icloud.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <button
            className="font-mono text-sm text-primary border-primary 
                            px-8 py-4 border-[1.5px] rounded  hover:text-purple transition ease-in	duration-200"
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}
