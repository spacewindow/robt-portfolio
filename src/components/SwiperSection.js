import Image1 from "../images/campaign-analytics/detail6.jpg";
import Image2 from "../images/campaign-analytics/detail5.jpg";
import Image3 from "../images/campaign-analytics/detail3.jpg";
import Image4 from "../images/campaign-analytics/detail4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import React, { useState, useRef, forwardRef } from "react";
import { Controller } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);

function SwiperSection(props) {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  console.log("DATA", props.data);

  return (
    <section
      className={
        props.id + " display display--slider display--" + props.screenSize
      }
    >
      <div className="grid no-gutter grid--column-grid">
        <div className="grid-cell grid3 top-content">
          <h4>{props.swiperHeading}</h4>
        </div>

        <div className="grid-cell grid3 bottom-content">
          <div className="display__nav start">
            <div
              className="display__nav__arrow display__nav__arrow--left"
              ref={prevRef}
            ></div>
            <div ref={paginationRef} className="swiper-pagination-custom"></div>
            <div
              className="display__nav__arrow display__nav__arrow--right"
              ref={nextRef}
            ></div>
          </div>
          <Swiper
            modules={[Controller]}
            controller={{ control: controlledSwiper }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            className="display__captions"
          >
            {props.data.map((slide, index) => (
              <SwiperSlide key={"slide" + index}>
                <p>{slide.caption}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="grid-cell grid9 grid-cell--display">
          <div className="display__screen__wrapper">
            <div className="display__screen">
              <Swiper
                effect={"fade"}
                modules={[Controller, EffectFade]}
                onSwiper={setControlledSwiper}
              >
                {props.data.map((slide, index) => (
                  <SwiperSlide key={"slide" + index}>
                    <img src={slide.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SwiperSection;
