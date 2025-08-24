"use client";

import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-6 px-6 md:px-16 lg:px-32 py-10">
      <h2 className="text-2xl font-serif">Popular Products</h2>
      
      <div>
        <ProductCard />
      </div>
      
      <button
        onClick={() => router.push("/all-products")}
        className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition w-fit self-center"
      >
        See more
      </button>
    </section>
  );
};

export default Products;