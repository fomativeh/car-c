import Image from "next/image";
import Link from "next/link";
import React from "react";

type chooseCardProps = {
  title: string;
  description: string;
  imageIndex: number;
};
const ChooseCard = ({ title, description, imageIndex }: chooseCardProps) => {
  return (
    <figure className="relative w-[300px] max-sm:w-[80%] h-[300px] m-[30px] overflow-hidden transition-all rounded-[12px]">
      <Image
        src={`/assets/images/choose-${imageIndex}.jpg`}
        fill
        alt="Car image"
        className="rounded-[inherit] hover:scale-[1.49] transition-transform duration-[700ms] ease-in-out"
      />

      <section className="pointer-events-none absolute w-full h-full flex flex-col justify-center items-center text-white font-[Kanit] bg-[#0000006b]">
        <p className="font-bold text-[20px] mb-[20px]">
          {title}
        </p>

        <span className="w-[85%] p-[20px] bg-[#e52727bd] text-white text-[12px]">{description}</span>
        
      </section>
    </figure>
  );
};

export default ChooseCard;
