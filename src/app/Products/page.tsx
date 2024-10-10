"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Nabvar/Navbar";
import ProductSection from "@/components/ProductSection/ProductSection";
import { productsData } from "@/utils/productsDetails";
import React, { useEffect } from "react";
import AOS from "aos";


const Products = () => {

    
  useEffect(() => {
    AOS.init({ duration: 1150, offset: 900 });
  }, []);
  
  return (
    <main className="min-h-screen w-full bg-[#000000] relative flex flex-col justify-start items-center overflow-x-hidden">
      <Navbar page="Products" />
      {/* Products Section */}
      <section className="mt-[120px] w-full flex flex-col justify-start items-center">
        {productsData.map((eachProduct, i) => {
          return (
            <ProductSection
              description={eachProduct.description}
              imageCategory={eachProduct.imageCategory}
              key={i}
              subServices={eachProduct.subServices}
              title={eachProduct.title}
            />
          );
        })}
      </section>
      <Footer />
    </main>
  );
};

export default Products;
