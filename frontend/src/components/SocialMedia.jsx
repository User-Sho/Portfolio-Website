import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/User-Sho"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://kaggle.com/" target="_blank" rel="noopener noreferrer">
        <div>
          <FaKaggle />
        </div>
      </a>
      <a
        href="https://twitter.com/CodingZamurai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
