import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/heroSection/Hero";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import EcoFriendly from "./components/EcoFriendly/EcoFriendly";
import FoodCards from "./components/randomCards";
import Products from "./components/products/Products";
import OfferProducts from "./components/OfferProducts";
import News from "./components/news/News";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Products />
      <Testimonial />
      <OfferProducts />
      <EcoFriendly />
      <FoodCards />
      <News />
      <Footer />
    </div>
  );
}

export default App;