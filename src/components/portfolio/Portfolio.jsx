import "./portfolio.scss";
// import { Link } from "react-router-dom";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import amazon from "../../../public/safu-amazon.png";
import netflix from "../../../public/safu-netflix.png";
import apple from "../../../public/apple.png";
import evangadi from "../../../public/evangadi.jpg";
import teastation from "../../../public/tea-station.png";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Amazon Clone",
    img: amazon,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Netflix Clone",
    img: netflix,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Apple website clone",
    img: apple,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Evangadi forum",
    img: evangadi,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Tea station",
    img: teastation,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  let demoLink;
  let sourceCodeLink;

  switch (item.title) {
    case "Amazon Clone":
      demoLink = "https://safu-amazon.netlify.app";
      sourceCodeLink = "https://github.com/safumulatu/Amazon-clone-latest";
      break;
    case "Netflix Clone":
      demoLink = "https://safumulatu.github.io/Netflix-clone-2024/";
      sourceCodeLink = "https://github.com/safumulatu/Netflix-clone-2024";
      break;
    case "Apple website clone":
      demoLink = "https://safu-apple-website.netlify.app";
      sourceCodeLink = "https://github.com/safumulatu/apple-website-clone";
      break;
    case "Evangadi forum":
      demoLink = "https://safu-evangadi.netlify.app";
      sourceCodeLink = "https://github.com/safumulatu/evangadi-forum-client";
      break;
    case "Tea station":
      demoLink = "https://safu-tea-station.netlify.app";
      sourceCodeLink = "https://github.com/safumulatu";
      break;
    default:
      demoLink = "";
      sourceCodeLink = "";
  }

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="source-and-demo">
              {demoLink && (
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button>See Demo</button>
                </a>
              )}
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Source Code</button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
