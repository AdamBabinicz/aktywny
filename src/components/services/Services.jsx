import React from "react";
import "./Services.css";
import data from "../../constants/data";

const Services = () => {
  return (
    <div
      className="services section__padding bg__whitesmoke"
      id="nauka-programowania"
    >
      <div className="container">
        <div className="services__content grid">
          {data.services.map((service, index) => {
            return (
              <div className="services__content--item text__center" key={index}>
                <img src={service.img} alt="..." className="icon" />
                <h4 className="text__upper text">{service.title}</h4>
                <p className="para__text text__gray">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
