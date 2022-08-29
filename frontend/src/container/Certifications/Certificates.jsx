import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Certificates.scss";
import { images } from "../../constants";
import Carousel from "../../components/Carousel/Carousel";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificates, setCertificates] = useState([]);

  const [skills, setSkills] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type=="certificates"]';
    const querySkills = '*[_type=="skills"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });

    client.fetch(querySkills).then((data) => {
      setSkills(data);
    });
  }, []);

  /////////////////////////
  ///////////////////////////////////////////////////////////
  /* The section below is for calculating 
   the scroll width constraint  of the carousel*/

  const crlRef = useRef();
  const [scrollWidth, setScrollWidth] = useState();

  function getDragConstraints() {
    const visibleWidth = crlRef.current.clientWidth;
    const fullWidth = crlRef.current.scrollWidth;
    const scrollConstranint = visibleWidth - fullWidth;
    setScrollWidth(scrollConstranint);
  }

  useEffect(() => {
    getDragConstraints();
  }, [skills]);

  useEffect(() => {
    window.addEventListener("resize", getDragConstraints);

    return () => {
      window.removeEventListener("resize", getDragConstraints);
    };
  }, []);
  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////

  return (
    <>
      <div className="app__certificates-bg">
        <img src={images.bgCerts} alt="cert-sec-bg" />
      </div>
      <img
        src={images.bgFujin}
        alt="cert-sec-fujin"
        className="app__certificates-fujin"
      />
      <img
        src={images.bgRaijin}
        alt="cert-sec-Raijin"
        className="app__certificates-raijin"
      />
      <div>
        <h2 className="title_text">CERTIFICATES</h2>
      </div>
      {certificates.length && (
        <>
          <div className="app__certificates-container">
            <img
              src={urlFor(certificates[currentIndex].imageurl)}
              alt={certificates[currentIndex].course}
            />

            <div className="app__certificates-desc">
              <h4 className="bold-text">{certificates[currentIndex].course}</h4>
              <div>
                <div className="desc-text">
                  <p className="p-text">
                    {certificates[currentIndex].descriptions}
                  </p>
                </div>
                <a
                  href={certificates[currentIndex].certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="cert-verification p-text">
                    Certificate ID:{" "}
                    <span>{`${certificates[currentIndex].verification}`}</span>
                  </h5>
                </a>
                <h5 className="cert-provider p-text">{`Provided by ${certificates[currentIndex].company}`}</h5>
              </div>
            </div>
          </div>

          {/* Below are the << >> buttons  */}
          <div className="app__certificates-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? certificates.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === certificates.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__certificates-skillsHeader">
        <h3>skill arsenal</h3>
      </div>
      <Carousel ref={crlRef} skills={skills} scrollWidth={scrollWidth} />
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificates, "app__certificate "),
  "certificates",
  "parallax"
);
