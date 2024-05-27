"use client";

import React from "react";

import { companies } from "@/data";
import Image from "next/image";

const Technologies = () => {
  return (
    <section id="testimonials" className="py-20" data-aos="fade-up">
      <h2 className="text-white opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3 text-center mb-8">
        I am familiar with:
      </h2>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  width={45}
                  height={45}
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                {company.nameImg !== "" ? (
                  <Image
                    height={45}
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    className="md:w-24 w-20"
                  />
                ) : (
                  <h2 className="self-center font-medium text-lg">
                    {company.name}
                  </h2>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
