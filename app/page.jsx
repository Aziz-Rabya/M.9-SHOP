import Navbar from "../components/Navbar";
import Hero from "../components/HeaderSlider";
import Products from "../components/Products";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Featured />
    </main>
  );
}
