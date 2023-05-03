import React, { useState } from "react";
import "./Header.css";
import images from "../../constants/images";
import Navbar from "../navbar/Navbar";
import Modal from "../../components/Portal/Modal";

const Header = () => {
  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div
      className="header"
      style={{
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.02)), url(${images.header_bg})right center/cover no-repeat`,
      }}
    >
      <Navbar />
      <div className="container">
        <div className="header__content text__center text__light flex flex__center">
          <div className="header__content--right">
            <h1 className="header__title fw__6">
              Moja aktywność umysłowa i&nbsp;fizyczna
            </h1>
            <p className="para__text">
              Mila Radości - Dumne Warchoły 2022 - Bieg Wolontariatu Radomskego
            </p>
            <a href="#" className="btn btn__blue" onClick={() => Toggle()}>
              Więcej
            </a>
          </div>
          <Modal show={modal} close={Toggle} title="Mila Radości">
            <p>
              Wszyscy uczestnicy biegu na jedną milę otrzymali koszulki
              biało-czerwone i&nbsp;pamiątkowy medal.
            </p>
            <br />
            <div className="medal">
              <img src={images.img} alt="..." />
              <img src={images.img1} alt="..." />
              <img src={images.img2} alt="..." />
            </div>
            <br />
            <p>
              <em>wiadomość własna</em>
            </p>
          </Modal>
          <div className="header__content--left"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
