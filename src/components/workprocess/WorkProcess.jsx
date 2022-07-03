import React from "react";
import "./WorkProcess.css";
import WorkProcessVid from "../../assets/videos/video3.mp4";
import { ControlBar, Player, PlayToggle } from "video-react";
import "video-react/dist/video-react.css";

const WorkProcess = () => {
  return (
    <div className="workprocess section__padding">
      <div className="container">
        <div className="workprocess__content text__center">
          <h2 className="section__title">
            Działalność w&nbsp;wolontariacie sportowym
          </h2>
          <p className="para__text">
            "Wolontariat sportowy to dość specyficzna gałąź wolontariatu.
            Najczęściej ma charakter jednorazowy, akcyjny i&nbsp;w&nbsp;skrócie
            rzecz ujmując, polega na wsparciu organizatorów imprezy sportowej.
            Wolontariusze potrzebni są głównie w&nbsp;czasie trwania wydarzenia
            i&nbsp;istotna jest wtedy duża dyspozycyjność."
          </p>
          <div className="vid__container">
            <Player autoPlay loop src={WorkProcessVid}>
              <ControlBar autoHide={false} disableDefaultControls={true}>
                <PlayToggle />
              </ControlBar>
            </Player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
