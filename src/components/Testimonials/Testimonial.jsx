import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/dream.svg";
import profilePic2 from "../../img/teach.png";
import profilePic3 from "../../img/amazon.png";
import profilePic4 from "../../img/myntra.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Dream-Focus project. This project is related to Modern AI. And this is a company project and my role was as a UI developer and this project developed by using Html, Css, Javascript, Ajex and React js.  ",
    },
    {
      img: profilePic2,
      review:
        "This project is based on Education purpuse. Like if any one want take tution class and one students who need tution teacher so by the help of this App they can find in easy way nearest of your Teachers, students, Schools and they can check distance using Google map ",
    },
    {
      img: profilePic3,
      review:
        "This is a colone Amazone app and created UI part of this project. I created by this app by using Html Css Javascript and React-Native. I added many features as like Real Amazone App  ",
    },
    {
      img: profilePic4,
      review:
        "This is a Myntra-clone website and i created this project by using Angular-15 and i added here all many features like Add to bag delete one product from bag and we can remove all product from bag like that. ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Projects details:- </span>
        <span>company and clone-projects </span>
        <span></span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
