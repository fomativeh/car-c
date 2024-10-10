import React, { useEffect } from "react";
import "./Hero.css";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero w-full mt-[120px] relative overflow-x-hidden">
      {/* Overlay */}
      <div className="w-full h-full absolute top-0 left-0 bg-[#00000047] z-[-1]"></div>

      {/* Hero content */}
      <section className="w-full h-full max-xl:flex-col flex justify-between max-xl:justify-center items-center z-[1] bg-[#00000096]">
        <section className="w-[35%] max-xl:w-full  max-xl:items-center h-full flex flex-col justify-center items-end font-[Kanit] font-bold">
          <p className="text-white text-[45px] max-xl:text-[10vw] text-center max-xl:max-w-[90%]" data-aos="slide-right" data-aos-duration="800">
            Transform your car
          </p>
          <i className="text-theme_red text-[18px] max-xl:mt-[20px]" data-aos="slide-left" data-aos-duration="1200">
            Transform your <span className="text-white">ride.</span>
          </i>
        </section>

        <section className="w-[50%] h-full flex flex-col max-xl:flex-row max-xl:w-full justify-center items-center">
          <figure data-aos="slide-up" data-aos-duration="1200" className="image-scale w-[400px] h-[200px] max-xl:w-[45vw] max-xl:mr-[2vw] relative mb-[30px] overflow-hidden transition-all rounded-[20px]">
            <Image
              src={"/assets/images/car-1.jpeg"}
              fill
              alt="Car image"
              className="rounded-[inherit] hover:scale-[1.49] transition-transform duration-[700ms] ease-in-out"
            />
            <section className="pointer-events-none absolute w-full h-full flex flex-col justify-center items-center text-white font-[Kanit] bg-[#00000064]">
              <p className="font-bold text-[25px] mb-[20px] max-xl:text-[4vw] max-w-[80%] text-center">
                Explore our services
              </p>
              <Link
                href={"/services"}
                className="px-[25px] py-[10px] rounded-[12px] bg-theme_red pointer-events-auto"
              >
               {" Let's go"}
              </Link>
            </section>
          </figure>

          <figure data-aos="slide-left" data-aos-duration="900" className="image-scale w-[400px] h-[200px] max-xl:w-[45vw] relative mb-[30px] overflow-hidden transition-all rounded-[20px]">
            <Image
              src={"/assets/images/car-4.jpg"}
              fill
              alt="Car image"
              className="rounded-[inherit] hover:scale-[1.49] transition-transform duration-[700ms] ease-in-out"
            />

            <section className="pointer-events-none absolute w-full h-full flex flex-col justify-center items-center text-white font-[Kanit] bg-[#00000086]">
              <p className="font-bold text-[25px] mb-[20px] max-xl:text-[4vw] max-w-[80%] text-center">
                View our latest projects
              </p>
              <Link
                href={"/cases"}
                className="px-[25px] py-[10px] rounded-[12px] bg-theme_red pointer-events-auto"
              >
                {"Let's go"}
              </Link>
            </section>
          </figure>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
