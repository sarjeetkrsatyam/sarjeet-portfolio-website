import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/dream.svg";
import Fiverr from "../../img/teach.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/myntra.png";
import Facebook from "../../img/social.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works on these projects
          </span>
          <span>
            Company work and <br /> Clone-project
          </span>
          <spane style={{ color: darkMode ? "white" : "black" }}>
            Dream-Focus project i have worked and this is company project
            <br />
            I have created 2 Android app clone by using React-Native
            <br />
            and i worked on React js project and created Dream-Focus project{" "}
            <br /> and this is company project and i created 2-3 clone project
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Get in touch</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="teach-img" src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img className="myntra-img" src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="social-img" src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
