import React from "react";
import "./AboutUs.css";
import images from "../../constants/images";

const AboutUs = () => {
  return (
    <div className="about section__padding" id="o-sobie">
      <div className="container">
        <div className="about__content text__center">
          <h2 className="section__title">O&nbsp;sobie</h2>
          <p className="para__text text__grey">
            Najchętniej zajmuję się zgłębianiem języków programowania. Zajęcie
            to zajmuje mi mnóstwo czasu. Czytałem gdzieś, że aby opanować jeden
            język programistyczny, należy poświęcić mu 10 tys. godzin.
            <br /> Mój syn określił tę czynność "koczowaniem", przekręcając
            słowo "kodowanie". Z&nbsp;całą pewnością kodowanie jest koczowaniem
            przed laptopem.
            <br />
            Jednak dwa razy w&nbsp;tygodniu odrywam się od "koczowania", aby
            poćwiczyć rozciąganie na zajęciach z&nbsp;"mocnego kręgosłupa"
            i&nbsp;aerobic w&nbsp;wodzie (z&nbsp;elementami korekcyjno -
            kompensacyjnymi).
          </p>
          <img src={images.signature} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
