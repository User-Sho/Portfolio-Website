import React from "react";
import { motion } from "framer-motion";

import { urlFor } from "../../client";
import { images } from "../../constants";
import "./Carousel.scss";

const Carousel = (props, ref) => {
  return (
    <>
      <motion.div
        ref={ref}
        whileTap={{ cursor: "grabbing" }}
        className="carousel"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 5, left: props.scrollWidth }}
          className="app__skills-container"
        >
          {props.skills.map((skill) => (
            <motion.div
              whileHover={{ y: [0, -10, 0, -5, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="app__skills-item"
              key={skill.skillNames}
            >
              <img src={urlFor(skill.icons)} alt={`${skill.skillNames}_icon`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="scroll_tip">
        <img src={images.leftArrow} alt="left-arrow" className="leftArrow" />
        <p>Drag to scroll</p>
        <img src={images.rightArrow} alt="right-arrow" className="rightArrow" />
      </div>
    </>
  );
};

export default React.forwardRef(Carousel);
