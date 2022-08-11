import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <div className="app__footer-header">
        <h2 className="title_text">CONTACT ME</h2>
        <h3 className="subtitle_text">Let's talk over coffee</h3>
      </div>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <div>
            <AiOutlineMail />
          </div>

          <a href="mailto:coding.zamurai@gmail.com" className="email-link">
            coding.zamurai@gmail.com
          </a>
        </div>
        <div className="app__footer-social">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="linkedin">
              <BsLinkedin />
            </div>
          </a>
          <a
            href="https://github.com/User-Sho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github">
              <BsGithub />
            </div>
          </a>
          <a
            href="https://kaggle.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="kaggle">
              <FaKaggle />
            </div>
          </a>
          <a
            href="https://twitter.com/CodingZamurai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="twitter">
              <BsTwitter />
            </div>
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form">
          <div>
            <label htmlFor="nameForm" className="p-text">
              Name:
            </label>
            <input
              id="nameForm"
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="emailForm" className="p-text">
              Email:
            </label>
            <input
              id="emailForm"
              className="p-text"
              type="text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="msgForm" className="p-text">
              Message:
            </label>
            <textarea
              id="msgForm"
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </button>
          </div>
        </div>
      ) : (
        <div className="app__footer-thanks">
          <h3>
            Thank you! I will check your message and get back to you as soon as
            possible :)
            <br />
            <span>
              Thanks again,
              <br /> Sho (C.Z.)
            </span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "parallax"
);
