import Video from "../images/campaign-analytics/campaigns-full.mp4";
import raw from "raw.macro";
// WebVTT file imported dynamically below using require(path + props.id) for <video><track> Read with raw(path + props.id) + parsed with node-webvtt below to generate an array for <SwiperSlide /> creation

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import React, { useState, useRef, useEffect } from "react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const webvtt = require("node-webvtt");

function VideoSection(props) {
  // Read WebVTT file and convert to object with cues Array
  const id = props.id;
  const webvttText = raw(`../images/${id}/video-chapters.vtt`);
  const webvttObj = webvtt.parse(webvttText);

  // Swiper for captions
  const [swiper, setSwiper] = useState(null);

  const slideTo = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const handleSlideChange = () => {
    syncVideo(swiper.activeIndex);
  };

  const syncVideo = (chapterIndex) => {
    const video = CAVideo.current;
    const chapterStartTime = video.textTracks[0].cues[chapterIndex].startTime;
    video.currentTime = chapterStartTime;
  };

  // Video for visuals

  const CAVideo = useRef();
  const CAVideoTrackRef = useRef();

  // sync video with slideShow

  useEffect(() => {
    // on load, set an event listener on specific <track> DOM element: onCueChange does not exist in ReactJS, annoyingly
    CAVideoTrackRef.current.oncuechange = (e) => {
      handleCueChange(e);
    };
  }, []);

  const handleCueChange = (event) => {
    let chapterIndex = event.target.track.activeCues[0].id;
    chapterIndex = parseInt(chapterIndex); // turn id string into an integer
    // console.log("chapter number is " + chapterIndex);
    slideTo(chapterIndex);
  };

  return (
    <section className={"display display--slider display--" + props.screenSize}>
      <div className="grid no-gutter grid--column-grid">
        <div className="grid-cell grid3 top-content">
          <h4>Features</h4>
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
          <div className="display__captions">
            <Swiper
              // modules={[Navigation, Pagination]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                el: paginationRef.current,
                clickable: true,
              }}
              className="display__captions"
              onSwiper={setSwiper}
              onSlideChange={handleSlideChange}
            >
              {webvttObj.cues.map((cue, index) => (
                <SwiperSlide key={"cue" + index}>
                  <p>{cue.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="grid-cell grid9 grid-cell--display">
          <div className="display__screen__wrapper">
            <div className="display__screen">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                ref={CAVideo}
                onChange={() => console.log("track change event")}
              >
                <source src={Video} />
                <track
                  ref={CAVideoTrackRef}
                  kind="chapters"
                  label="Locations"
                  //   src={VideoChapters}
                  src={require("../images/" + props.id + "/video-chapters.vtt")}
                  srcLang="en"
                  default
                  type="text/vtt"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
