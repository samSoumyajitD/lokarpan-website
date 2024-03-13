import "./Footer.css";
import { FaAngleDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [openStates, setOpenStates] = useState({
    about: false,
    contact: false,
    social: false,
    contribute: false,
  });

  const toggleList = (listName) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [listName]: !prevState[listName],
    }));
  };

  return (
    <div className="footer-container footer-mobile">
      <div className="footer-container-inner">
        <div className="content">
          <div className="footer-list">
            <img
              src="https://res.cloudinary.com/digbzwlfx/image/upload/v1707625023/Frame_48098098_rag4wi.svg"
              className="lokarpan-logo"
            />
            <div className="icons-container icons-list">
              <Link to='/'>
                <FaFacebook className="footer-icon" />
              </Link>
              <Link to='/'>
                <FaInstagramSquare className="footer-icon" />
              </Link>
              <Link to='/'>
                <FaLinkedin className="footer-icon" />
              </Link>
              <Link to='/'>
                <FaMedium className="footer-icon" />
              </Link>
            </div>
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("about")}
            >
              <h4>About Lokarpan</h4>
              <FaAngleDown
                className={`footerArrow ${openStates.about ? "active" : ""}`}
              />
            </div>

            <ul
              className={`footer-list-items ${openStates.about ? "open" : ""}`}
            >
              <li>
                <Link to='/'>Our Role</Link>
              </li>
              <li>
                <Link to='/history'>History</Link>
              </li>
              <li>
                <Link to="/mission">Mission</Link>
              </li>
              <li>
                <Link to="/leadership">Leadership</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/financials">Financials</Link>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("contact")}
            >
              <h4>Contact Us</h4>
              <FaAngleDown
                className={`footerArrow ${openStates.contact ? "active" : ""}`}
              />
            </div>

            <ul
              className={`footer-list-items ${
                openStates.contact ? "open" : ""
              }`}
            >
              <li>
                <Link to="/">Get in Touch</Link>
              </li>
              <li>
                <Link to="/newsletter">Newsletter</Link>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("social")}
            >
              <h4>Social</h4>
              <FaAngleDown
                className={`footerArrow ${openStates.social ? "active" : ""}`}
              />
            </div>
            <ul
              className={`footer-list-items ${openStates.social ? "open" : ""}`}
            >
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
          <div className="footer-list">
            <div
              className="footer-list-title"
              onClick={() => toggleList("contribute")}
            >
              <h4>Contribute</h4>
              <FaAngleDown
                className={`footerArrow ${
                  openStates.contribute ? "active" : ""
                }`}
              />
            </div>
            <ul
              className={`footer-list-items ${
                openStates.contribute ? "open" : ""
              }`}
            >
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/being-a-volunteer">Volunteer</Link>
              </li>
              <li>
                <Link to="/">Our Supporters</Link>
              </li>
            </ul>
            <hr className="footer-hor-line" />
          </div>
        </div>

        <div className="social-links">
          <div className="policy-text">
            <span>Copyright @ {year} Lokarpan Inc. All right reserved.</span>
            <span className="desktop-footer-last-sec">
              <Link to="/">Privacy Policy</Link>
            </span>
            <span className="desktop-footer-last-sec">
              <Link to="/">Terms of Use</Link>
            </span>
            <span className="mobile-footer-last-sec">
              <Link to="/">Privacy Policy</Link> | <Link to="/">Terms of Use</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
