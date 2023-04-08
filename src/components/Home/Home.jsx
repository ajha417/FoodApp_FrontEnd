import React from "react";
import "../../styles/home.scss";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
const Home = () => {
  const option = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...option}>GoFoodies: The taste for everyone</motion.h1>
          <motion.p
            {...option}
            transition={{
              delay: 0.3,
            }}
          >
            Let's try some of our tasty and healthy dishes.
          </motion.p>
        </div>
        <motion.a
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          href="#menu"
        >
          Explore Menu
        </motion.a>
      </section>
      <Founder/>
      <Menu/>
    </>
  );
};

export default Home;
