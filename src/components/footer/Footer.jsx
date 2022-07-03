import React from "react";
import "./Footer.css";
import images from "../../constants/images";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer section__padding bg__dark">
      <div className="container">
        <div className="footer__content grid text__light text__center">
          <div className="footer__content--item">
            <a href="#" className="footer__navlink">
              <img src={images.logo} alt="..." />
            </a>
            <p className="para__text">
              Radom 2022 - {new Date().getFullYear()}.
            </p>
          </div>
          <div className="footer__content--item">
            <a href="mailto:puaro@vp.pl">puaro@vp.pl</a>
          </div>
          <div className="footer__content--item">
            <h3 className="footer__title">Linki</h3>
            <ul className="footer__links">
              <li>
                <a
                  href="//www.youtube.com/watch?v=wTZDwsOTdHg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Film
                </a>
              </li>
              <li>
                <a
                  href="//a-g.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  a&nbsp;-&nbsp;g
                </a>
              </li>
              <li>
                <a
                  href="//naszsenior.pl/temat/aktywnosc-fizyczna-i-umyslowa-seniora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Senior
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content--item">
            <h3 className="footer__title">Strony</h3>
            <ul className="footer__links">
              <li>
                <a href="//www.facebook.com/BiegiemRadom">Biegiem&nbsp;Radom</a>
              </li>
              <li>
                <a href="//www.facebook.com/AkademiaAktywnosciRadom">
                  Akademia&nbsp;Aktywności
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content--item">
            <h3 className="footer__title">Media</h3>
            <ul className="footer__links">
              <li>
                <a
                  href="//www.instagram.com/p/CCqV4hCFqYl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="//twitter.com/LibrusPL/status/1491354864802480128"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="//pl-pl.facebook.com/AspergerowyWorld"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="//pl.pinterest.com/grunia9269/zesp%C3%B3%C5%82-aspergera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterestP />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
