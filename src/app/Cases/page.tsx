"use client";
import CasesSection from "@/components/CasesSection/CasesSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Nabvar/Navbar";
import ProductSection from "@/components/ProductSection/ProductSection";
import { cases, CaseType } from "@/utils/casesDetails";
import { productsData } from "@/utils/productsDetails";
import React, { useEffect, useState } from "react";

const Cases = () => {
  const [casesToRender, setCasesToRender] = useState<CaseType[]>(cases);
  const [currentTab, setCurrentTab] = useState<string>("All");
  const filters = [
    "All",
    "Performance Tuning",
    "Car Wrapping",
    "Window Tinting",
    "Custom Body Kits",
  ];

  useEffect(() => {
    window.scrollTo(0,0)
    if (currentTab == "All") {
      setCasesToRender(cases);
    } else {
      setCasesToRender(
        cases.filter((eachCase) => eachCase.category == currentTab)
      );
      console.log(cases.filter((eachCase) => eachCase.category == currentTab));
    }
  }, [currentTab]);

  return (
    <main className="min-h-screen w-full bg-[#000000] relative flex flex-col justify-start items-center font-[Kanit] overflow-x-hidden">
      <Navbar page="Cases" />
      {/* Cases Section */}
      <section className="mt-[180px] w-full flex flex-col justify-start items-center">
        <section className="my-[20px] h-[60px] fixed top-[100px] left-[30px] z-[7] bg-black flex justify-start items-center">
          <nav className="flex justify-start items-center text-[14px] px-[20px]">
            <span className="sm:hidden text-white font-bold mr-[20px]">
              Select Case:
            </span>

            <select
              onChange={(e) => setCurrentTab(e.target.value)}
              name="filters"
              id="filters"
              className="sm:hidden cursor-pointer outline-none bg-theme_red p-[5px] text-white border-none"
            >
              {filters.map((eachTab, i) => {
                return (
                  <option value={`${eachTab}`} key={i} selected={eachTab==currentTab}>
                    {eachTab}
                  </option>
                );
              })}
            </select>

            {filters.map((eachTab, i) => {
              return (
                <>
                  <span
                    onClick={() => setCurrentTab(eachTab)}
                    style={{
                      backgroundColor: `${
                        currentTab == eachTab ? `#E52727` : `#414344`
                      }`,
                    }}
                    className="max-sm:hidden mr-[15px] px-[12px] py-[8px] cursor-pointer bg-[#414344] text-white"
                    key={i}
                  >
                    {eachTab}
                  </span>
                </>
              );
            })}
          </nav>
        </section>
        {casesToRender.map((eachCase, i) => {
          return (
            <CasesSection
              category={eachCase.category}
              imageCategory={eachCase.imageCategory}
              works={eachCase.works}
              key={i}
            />
          );
        })}
      </section>
      <Footer />
    </main>
  );
};

export default Cases;
