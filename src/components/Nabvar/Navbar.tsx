"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ page }: { page: string }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="z-[99999] fixed top-0 left-0 h-[120px] bg-white w-full flex justify-between items-center px-[20px] font-[Kanit]">
      {/* Mobile menu */}
      <section
        style={{
          transform: menuOpen ? "translateY(148px)" : "translateY(-100vh)",
          opacity: menuOpen ? 1 : 0,
        }}
        className="sm:hidden fixed z-[8] left-0 w-full bg-[#c9c9c9]  transition-all duration-[400ms] ease-in-out"
      >
        <ul className="w-full flex flex-col justify-start items-start p-[30px] text-[20px]">
          <li
            onClick={() => setMenuOpen(!menuOpen)}
            className="mb-[10px]"
            style={{ color: `${page == "Home" ? "#E52727" : "black"}` }}
          >
            <Link href={"/"}>Home</Link>
          </li>

          <li
            onClick={() => setMenuOpen(!menuOpen)}
            className="mb-[10px]"
            style={{ color: `${page == "Products" ? "#E52727" : "black"}` }}
          >
            <Link href={"/Products"}>Products</Link>
          </li>

          <li
            onClick={() => setMenuOpen(!menuOpen)}
            className="mb-[10px]"
            style={{ color: `${page == "Cases" ? "#E52727" : "black"}` }}
          >
            <Link href={"/Cases"}>Cases</Link>
          </li>
        </ul>
      </section>

      <figure className="relative h-[90%] w-[200px] max-sm:w-[150px]">
        <Image src={"/assets/images/logo.jpg"} alt="Logo image" fill />
      </figure>
      {/* Desktop menu */}

      <ul className="flex list-none h-full font-[Kanit] font-bold max-sm:hidden">
        <li
          style={{ color: `${page == "Home" ? "#E52727" : "black"}` }}
          className="px-[40px] h-full flex justify-center items-center hover:text-theme_red cursor-pointer hover:italic"
        >
          <Link href={"/"}>Home</Link>
        </li>

        <li
          style={{ color: `${page == "Products" ? "#E52727" : "black"}` }}
          className="px-[40px] h-full flex justify-center items-center hover:text-theme_red cursor-pointer hover:italic"
        >
          <Link href={"/Products"}>Products</Link>
        </li>

        <li
          style={{ color: `${page == "Cases" ? "#E52727" : "black"}` }}
          className="px-[40px] h-full flex justify-center items-center hover:text-theme_red cursor-pointer hover:italic"
        >
          <Link href={"/Cases"}>Cases</Link>
        </li>
      </ul>

      <figure
        className="relative h-[32px] w-[32px] sm:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image
          src={`/assets/icons/${menuOpen ? `x` : `bars`}-solid.svg`}
          alt="Menu icon"
          fill
        />
      </figure>
    </nav>
  );
};

export default Navbar;
