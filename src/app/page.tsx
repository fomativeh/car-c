"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Nabvar/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import ChooseCard from "@/components/ChooseCard/ChooseCard";
import { chooseDetails } from "@/utils/chooseDetails";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#000000] relative flex flex-col justify-start items-center">
      <Navbar page="Home" />
      <HeroSection />

      {/* Banner  section desktop*/}
      <section className="max-lg:hidden w-[95%] bg-theme_red h-[200px] my-[40px] flex justify-between items-center relative pl-[50px] font-[Kanit] overflow-hidden">
        <section className="max-w-[50%] flex flex-col justify-center items-start ">
          <p className="text-[40px]  text-white font-semibold mb-[10px]">
            GLOW UP IN STYLE
          </p>
          <p className="font-semibold text-black max-lg:text-[14px]">
            Our car wrapping services turn your vehicle into a statement.
            <br />
            Choose from a variety of finishes to express your style.
          </p>
        </section>

        <section className="absolute max-lg:relative w-[35%] right-[-40px] bg-black h-[400px] rounded-[50%] overflow-hidden">
          <figure className="image-scale w-full h-full overflow-hidden transition-all rounded-[20px]">
            <Image
              src={"/assets/images/car-6.jpg"}
              fill
              alt="Car image"
              className="rounded-[inherit] hover:scale-[1.49] transition-transform duration-[700ms] ease-in-out"
            />
            <section className="pointer-events-none absolute w-full h-full flex flex-col justify-center items-center text-white font-[Kanit] bg-[#00000064]">
              <Link
                href={"/services"}
                className="px-[25px] py-[10px] rounded-[7px] bg-theme_red pointer-events-auto"
              >
                Browse our works
              </Link>
            </section>
          </figure>
        </section>
      </section>

      {/* Banner  section mobile*/}
      <section className="rounded-[20px] lg:hidden w-[95%] bg-theme_red my-[40px] pt-[20px] flex flex-col justify-center items-center relative font-[Kanit] overflow-hidden">
        <section className="w-[90%] flex flex-col justify-center items-center">
          <p className="text-[40px] max-sm:text-center max-sm:text-[8vw] max-sm:mb-[12px] text-white font-semibold mb-[10px]" data-aos="slide-down">
            GLOW UP IN STYLE
          </p>
          <p className="text-center max-sm:text-left font-semibold text-black max-lg:text-[14px]" data-aos="slide-up">
            Our car wrapping services turn your vehicle into a statement.
            <br />
            Choose from a variety of finishes to express your style.
          </p>
        </section>

        <section className="mt-[30px] w-full bg-black h-[200px] overflow-hidden rounded-b-[20px]" data-aos="fade-right">
          <figure className="rounded-[inherit] relative image-scale w-full h-full overflow-hidden transition-all ">
            <Image
              src={"/assets/images/choose-4.jpg"}
              fill
              alt="Car image"
              className="rounded-[inherit] hover:scale-[1.49] transition-transform duration-[700ms] ease-in-out"
            />
            <section className="pointer-events-none absolute w-full h-full flex flex-col justify-center items-center text-white font-[Kanit] bg-[#00000064]">
              <Link
                href={"/services"}
                className="px-[25px] py-[10px] rounded-[7px] bg-theme_red pointer-events-auto"
              >
                Browse our works
              </Link>
            </section>
          </figure>
        </section>
      </section>


      {/* Why choose us section */}
      <section className="w-[95%] my-[80px] flex flex-col justify-start items-center font-[Kanit]">
        <h1 className="font-semibold text-white text-[36px]">WHY CHOOSE US</h1>
        <section className="flex flex-wrap justify-center items-center w-full flex-1 mt-[32px]">
          {chooseDetails.map((each, i) => {
            return (
              <ChooseCard
                key={i}
                description={each.description}
                title={each.title}
                imageIndex={i + 1}
              />
            );
          })}
        </section>
      </section>

      <Footer />
    </main>
  );
}
