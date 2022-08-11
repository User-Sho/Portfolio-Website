import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [navbarAnimation, setNavBarAnimation] = useState({
    animationName: "retractNavbar",
  });

  const enterAnimation = {
    initial: { y: -80 },
    animate: { y: 0 },
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  };

  let lastScrollY = window.scrollY;

  function handleScroll() {
    if (lastScrollY < window.scrollY) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    lastScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showNavBar && (
      <motion.nav
        {...enterAnimation}
        className="app__navbar"
        style={navbarAnimation}
      >
        <div className="app__navbar-logo">
          <img src={images.navlogo} alt="logo" />
        </div>

        <ul className="app__navbar-links">
          {["home", "work", "certificates", "about", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* For mobile hamburger menu */}
        <div className="app__navbar-menu">
          <BiMenu
            onClick={() => {
              setToggle(true);
              setNavBarAnimation({ animationName: "none" });
            }}
          />

          {toggle && (
            <motion.div
              key="navbar"
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ul>
                {["home", "work", "certificates", "about", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        onClick={() => {
                          setToggle(false);
                          setNavBarAnimation({
                            animationName: "retractNavbar",
                          });
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
              <BiX
                onClick={() => {
                  setToggle(false);
                  setNavBarAnimation({ animationName: "retractNavbar" });
                }}
              />
            </motion.div>
          )}
        </div>
      </motion.nav>
    )
  );
};

export default Navbar;
