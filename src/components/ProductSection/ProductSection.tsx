import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";

type Props = {
  title?: string;
  imageCategory?: string;
  description?: string;
  subServices?: string[];
};

const ProductSection = ({
  description,
  subServices,
  title,
  imageCategory,
}: Props) => {

  const imagesCount = [1, 2, 3, 4];

  useEffect(() => {
    AOS.init({ duration: 1150, offset: 900 });
  }, []);

  return (
    <section className="w-[90%] max-sm:w-[97%] my-[20px] flex flex-col justify-start items-start font-[Kanit] p-[30px]">
      <span
        className="text-theme_red text-[40px] font-semibold"
        data-aos="slide-up"
      >
        {title}
      </span>
      <section className="max-lg:flex-col w-full mt-[25px] flex justify-start items-start max-sm:items-center max-xl:justify-between bg-theme_red text-white p-[30px] ">
        <section className="w-[40%] max-sm:w-full min-w-[300px]">
          <p className="text font-medium" data-aos="slide-left">
            {description}
          </p>

          <p
            className="text-[20px] font-bold mb-[10px] mt-[30px]"
            data-aos="slide-right"
          >
            We offer
          </p>
          <ol className="list-disc ml-[30px]">
            {subServices?.map((eachSubService, i) => {
              return (
                <li data-aos="slide-up" key={i}>
                  {eachSubService}
                </li>
              );
            })}
          </ol>
        </section>
        <section className="max-lg:mt-[40px] w-[60%] max-lg:w-full flex justify-center items-center flex-wrap">
          {imagesCount.map((eachImage, i) => {
            return (
              <figure
                key={i}
                className="relative max-sm:w-[30vw] max-sm:h-[30vw] max-lg:w-[35vw] max-lg:h-[35vw] lg:w-[35%] h-[150px] m-[10px] overflow-hidden rounded-[7px]"
              >
                <Image
                  src={`/assets/images/${imageCategory}-${eachImage}.jpg`}
                  fill
                  alt="Car image"
                  className="rounded-[inherit] hover:scale-[1.49] transition-transform duration-[700ms] ease-in-out"
                />
              </figure>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default ProductSection;
