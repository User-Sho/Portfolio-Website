import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All Work");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [work, setWork] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "work"]';

    client.fetch(query).then((data) => {
      setWork(data);
      setFilterWork(data);
    });
  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All Work") {
        setFilterWork(work);
      } else {
        setFilterWork(work.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <motion.div
        whileInView={{ x: [-8, -4, 0], opacity: [0.2, 0.5, 1] }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="app__work-bg-clouds"
      >
        <img src={images.clouds} alt="work_bg" />
      </motion.div>
      <motion.div
        whileInView={{ x: [8, 4, 0], opacity: [0.2, 0.5, 1] }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="app__work-bg-pine"
      >
        <img src={images.pine} alt="work_bg" />
      </motion.div>

      <h2 className="title_text app__flex">WORK & SKILLS</h2>

      <div className="app__work-filter">
        {[
          "All Work",
          "Website",
          "Web App",
          "Mobile App",
          "UI/UX",
          "Data Analytics",
          "Data Viz",
          "REFM",
          "Excel",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__work-filter-items app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div key={index} className="app__work-items app__flex">
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                {work.keySkills.map((icon, index) => (
                  <div
                    key={`icon-${index}`}
                    className="app__work-tag-icon app__flex"
                  >
                    <img src={urlFor(icon)} alt={icon.skillNames} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "parallax");
// export default AppWrap(Work, "work", "app__work parallax");
