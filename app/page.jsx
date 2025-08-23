import Navbar from "../components/Navbar";
import Hero from "../components/HeaderSlider";
import Products from "../components/Products";
import Featured from "../components/Featured";
import Banner from "../components/Banner";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Featured />
      <Banner />
      <Offer />
      <Footer />
    </main>
  );
}
