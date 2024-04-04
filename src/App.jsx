import "./app.scss";
import Hero from "../src/components/hero/Hero";
import Navbar from "../src/components/navbar/Navbar";

import Parallex from "../src/components/parallex/Parallex";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallex type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallex type="Portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
