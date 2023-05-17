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
  return (
    <div className="mx-3">
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
