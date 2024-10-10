"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { CaseType } from "@/utils/casesDetails";
import Image from "next/image";

const CasesSection = ({ category, imageCategory, works }: CaseType) => {
    function getRandomNumber(): number {
        return Math.floor(Math.random() * 4) + 1;
      }
      
  useEffect(() => {
    AOS.init({ duration: 450, offset:50 });
  }, []);
  return (
    <section className="w-[90%] my-[20px] flex flex-col justify-start items-start font-[Kanit] p-[10px]">
      <span
        className="text-theme_red text-[40px] font-semibold max-sm:w-full max-sm:text-center"
        data-aos="fade-left"
      >
        {category}
      </span>

      <section className="w-full mt-[25px] max-sm:mt-[10px] flex flex-wrap justify-center items-start p-[10px]">
        {works.map((eachWork, i) => {
          return (
            <section
              key={i}
              className="sm:w-[23%] min-w-[300px] max-sm:w-[300px] max-sm:mb-[50px] flex flex-col justify-start items-start m-[20px]"
            >
              <figure className="w-full h-[250px] mb-[20px] relative" data-aos="fade-up">
                <Image
                  src={`/assets/images/${imageCategory}-${getRandomNumber()}.jpg`}
                  alt={"Car image"}
                  fill
                />
              </figure>

              <p className="font-bold text-[#818385] text-[25px] mb-[10px]"  data-aos="fade-down">
                {eachWork.carName}
              </p>

              <span className="text-white font-medium" data-aos="fade-right">
                {eachWork.workDone}
              </span>

              <div className="w-full py-[15px] bg-theme_red mt-[20px] flex justify-center items-center text-white" data-aos="fade-up">
                Completed
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default CasesSection;
