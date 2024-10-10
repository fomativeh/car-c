import Image from "next/image";

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

  return (
    <section className="w-[95%] max-sm:w-[97%] my-[20px] flex flex-col justify-start items-start font-[Kanit] ">
      <span
        className="text-theme_red text-[40px] font-semibold max-sm:text-center max-sm:w-full"
      >
        {title}
      </span>
      <section className="max-lg:flex-col w-full mt-[25px] flex justify-start items-start max-sm:items-center max-xl:justify-between bg-theme_red text-white p-[30px] ">
        <section className="w-[40%] max-sm:w-full min-w-[300px]">
          <p className="text font-medium">
            {description}
          </p>

          <p
            className="text-[20px] font-bold mb-[10px] mt-[30px]"
          >
            We offer
          </p>
          <ol className="list-disc ml-[30px]">
            {subServices?.map((eachSubService, i) => {
              return (
                <li key={i}>
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
                className="relative max-sm:w-[32vw] max-sm:h-[30vw] max-lg:w-[35vw] max-lg:h-[35vw] lg:w-[35%] h-[150px] m-[10px] max-sm:m-[5px] overflow-hidden rounded-[7px]"
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
