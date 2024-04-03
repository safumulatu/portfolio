import "./app.scss";
import Hero from "../src/components/hero/Hero";
import Navbar from "../src/components/navbar/Navbar";

import Parallex from "../src/components/parallex/Parallex";
import Services from "./components/services/Services";
const App = () => {
  return (
    <div>
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
        {" "}
        <Parallex type="Portfolio" />
      </section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;
