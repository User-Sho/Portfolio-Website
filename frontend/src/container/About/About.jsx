import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";

import "./About.scss";

const About = () => {
  const [resume, setResume] = useState([]);
  const [title, setTitle] = useState([]);
  const [text, setText] = useState([]);

  useEffect(() => {
    const query = '*[_type == "resume"] {"resumeURL": myResume.asset->url}';
    const desc = '*[_type == "about"]';

    client.fetch(desc).then((data) => {
      setTitle(data[0].aboutTitle);
      setText(data[0].aboutText);
    });

    client.fetch(query).then((data) => {
      setResume(data[0].resumeURL);
    });
  }, []);

  function textArray(blocks = []) {
    return blocks.map((block) => {
      return block.children.map((child) => child.text);
    });
  }

  return (
    <>
      <motion.h1
        whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
        transition={{ duration: 0.5 }}
        className="title_text"
        viewport={{ once: true }}
      >
        ABOUT ME
      </motion.h1>
      <div className="app__about">
        <motion.div
          whileInView={{ opacity: [0, 0, 0.165], y: [100, 50, 0] }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
          className="app__about-bgPatterns"
        ></motion.div>

        <div className="app__about-img-container">
          <motion.div
            whileInView={{ opacity: [0, 0.3], y: [50, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // viewport={{ once: true }}
            className="app__about-profImg-top"
          >
            <img src={images.prof} alt="About prof top" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 0.6], y: [50, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // viewport={{ once: true }}
            className="app__about-profImg-middle"
          >
            <img src={images.prof} alt="About prof middle" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 9], y: [50, 0] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // viewport={{ once: true }}
            className="app__about-profImg-bottom"
          >
            <img src={images.prof} alt="About prof bottom" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // viewport={{ once: true }}
          className="app__about-desc-container"
        >
          <article className="app__about-descriptions">
            <h3>{title}</h3>
            {textArray(text).map((paragraph, index) => (
              <p key={`para-${index}`}>{paragraph}</p>
            ))}
          </article>
          <div className="app__about-btns">
            <a href="#contact">
              <button type="button" className="btnContact ">
                Contact
              </button>
            </a>
            <button type="button" className="btnResume ">
              <a href={`${resume}?dl=`}>résumé</a>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

// export default AppWrap(MotionWrap(About, "app__about"), "about", "parallax");
export default AppWrap(About, "about", "parallax");
