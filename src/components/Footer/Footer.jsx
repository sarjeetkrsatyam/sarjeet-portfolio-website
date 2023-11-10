import React from "react";
import "./Footer.css";
import Wave from "../../img/wave3.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "100%" }} />
      <div className="f-content">
        <div className="contact-details">
          <div className="contact-data">
            <span style={{ color: "rgb(205, 12, 226)", marginRight: "0.7rem" }}>
              Email:-
            </span>
            <span style={{ color: "gray", fontSize: "16px" }}>
              sarjeetkumarcse@gmail.com
            </span>
          </div>
          <div className="contact-data">
            <span style={{ color: "rgb(205, 12, 226)", marginRight: "0.7rem" }}>
              Phone:-
            </span>
            <span style={{ color: "gray", fontSize: "16px" }}>9110058872</span>
          </div>
          <div className="contact-data">
            <span style={{ color: "rgb(205, 12, 226)", marginRight: "0.7rem" }}>
              Address:-
            </span>
            <span style={{ color: "gray", fontSize: "16px" }}>
              Bhojaur masaurhi patna Bihar 804452
            </span>
          </div>
        </div>
        <div className="f-icons">
          <a href="https://www.instagram.com/sarjeet_kr_satyam/?igshid=NzZlODBkYWE4Ng%3D%3D">
            {" "}
            <a href="https://www.instagram.com/sarjeet_kr_satyam/?igshid=NzZlODBkYWE4Ng%3D%3D">
              <Insta color="white" size={"3rem"} />{" "}
            </a>
          </a>
          <a href="https://www.facebook.com/sarjeetkr.satyam?mibextid=ZbWKwL">
            {" "}
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/sarjeetkrsatyam">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.youtube.com/@sarjeetkrsatyam9493">
            <Youtube color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
