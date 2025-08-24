import React from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 py-10">
        <h2 className="text-2xl font-serif">All Products</h2>
        <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        <div>
          <ProductCard />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
