import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col justify-start items-center font-[Kanit]">
      <section className="px-[30px] flex flex-wrap sm:justify-between max-sm:justify-center items-center w-full sm:px-[40px]">
        <section className="max-sm:mb-[40px] flex flex-col justify-start items-center w-[300px]">
          <figure className="w-full h-[250px] relative">
            <Image src={"/assets/images/logo.jpg"} alt="Logo" fill />
          </figure>

          <i className="text-black font-medium">
            Your car, your vision—perfectly tuned to reflect your style.
          </i>
        </section>

        <section className="max-sm:mb-[40px] flex flex-col justify-center items-start w-[300px]">
          <span className="text-theme_red font-bold text-[25px] mb-[15px]">
            Contact Us
          </span>

          <p className="font-medium">
            We are reachable on various platforms.
          </p>

        <ul className="w-full flex flex-col justify-start items-start list-none mt-[15px] text-[14px]">
          <li className="mb-[5px] text-[#424446] font-medium cursor-pointer hover:underline">
            <Link href={"/"}>Facebook</Link>
          </li>

          <li className="mb-[5px] text-[#424446] font-medium cursor-pointer hover:underline">
            <Link href={"/"}>Telegram</Link>
          </li>

          <li className="mb-[5px] text-[#424446] font-medium cursor-pointer hover:underline">
            <Link href={"/"}>Instagram</Link>
          </li>

          <li className="mb-[5px] text-[#424446] font-medium cursor-pointer hover:underline">
            <Link href={"/"}>Twitter</Link>
          </li>

        </ul>
        </section>

        <section className="max-sm:mb-[40px] flex flex-col justify-center items-start w-[300px]">
          <span className="text-theme_red font-bold text-[25px] mb-[15px]">
            Newsletter
          </span>

          <p className="font-medium">
            Subscribe to our newsletter and keep in touch about our services.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex flex-col justify-center items-start"
          >
            <input
              type="text"
              className="text-normal border-none w-full h-[50px] mt-[30px] text-[white] outline-none rounded-[28px] pl-[20px] bg-[#424446]"
              placeholder="Your email..."
            />
            <button className="w-full bg-theme_red text-white mt-[10px] h-[50px] rounded-[28px]">
              Sign Up
            </button>
          </form>
        </section>
      </section>

      <section className="bg-black text-center w-full py-[20px] sm:mt-[25px]">
        <p className="white font-medium text-white">
          Copyright © 2024 броненосец All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
