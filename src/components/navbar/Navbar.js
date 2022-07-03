import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar" id="start">
      <div className="container flex">
        <div className="brand__and__toggler flex">
          <a href="/" className="navbar__brand">
            <img src={images.logo} alt="..." />
          </a>
          <button
            type="button"
            className="navbar__open--btn text__light"
            onClick={() => setToggleMenu(true)}
          >
            <FaBars size={26} />
          </button>
        </div>
        <div className="navbar__collapse">
          <ul className="navbar__nav">
            <li className="nav__item">
              <a
                href="#start"
                className="nav__link text__upper fw__6 text__light nav__active"
              >
                start
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#o-sobie"
                className="nav__link text__upper fw_6 text__light"
              >
                o&nbsp;sobie
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#foto-teka"
                className="nav__link text__upper fw_6 text__light"
              >
                fototeka
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#języki"
                className="nav__link text__upper fw_6 text__light"
              >
                języki
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#nauka-programowania"
                className="nav__link text__upper fw_6 text__light"
              >
                nauka
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#wolontariat-sportowy"
                className="nav__link text__upper fw_6 text__light"
              >
                wolontariat
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#kontakt"
                className="nav__link text__upper fw_6 text__light"
              >
                kontakt
              </a>
            </li>
          </ul>
        </div>
        {toggleMenu && (
          <div className="navbar__smallscreen">
            <button
              type="button"
              className="navbar__close--btn text__light"
              onClick={() => setToggleMenu(false)}
            >
              <FaTimes size={32} />
            </button>
            <ul
              className="navbar__nav--smallscreen text__light"
              onClick={() => setToggleMenu(false)}
            >
              <li className="nav__item">
                <a
                  href="#start"
                  className="nav__link text__upper fw__6 nav__active text__light"
                >
                  start
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#o-sobie"
                  className="nav__link text__upper fw__6 text__light"
                >
                  o&nbsp;sobie
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#foto-teka"
                  className="nav__link text__upper fw__6 text__light"
                >
                  fototeka
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#języki"
                  className="nav__link text__upper fw__6 text__light"
                >
                  języki
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#nauka-programowania"
                  className="nav__link text__upper fw__6 text__light"
                >
                  nauka
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#wolontariat-sportowy"
                  className="nav__link text__upper fw__6 text__light"
                >
                  wolontariat
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#kontakt"
                  className="nav__link text__upper fw__6 text__light"
                >
                  kontakt
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
