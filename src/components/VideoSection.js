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
  const file = props.chapterFileName;
  const webvttText = raw(`../images/${id}/${file}`);
  const webvttObj = webvtt.parse(webvttText);

  // Swiper for captions
  const [swiper, _setSwiper] = useState(null);

  const swiperRef = useRef(swiper);
  const setSwiper = (data) => {
    swiperRef.current = data;
    _setSwiper(data);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  // Video for visuals

  const ThisVideo = useRef();
  const ThisVideoTrackRef = useRef();

  // sync video currentTime / cue to Swiper active slide

  const handleSlideChange = (e) => {
    // Seeking in the video control will trigger handleCueChange, which also triggers a slideChange. In this case, we don't want to syncVideo (which has the effect of sending the video back to the start of the current chapter)
    // So check whether video cue and slide activeIndex are the same already ...
    const swiperIndex = swiperRef.current.activeIndex;
    const videoCueId = ThisVideo.current.textTracks[0].activeCues[0].id;
    if (swiperIndex.toString() === videoCueId) {
      // this is to stop video seeking triggering
      console.log("Don't update time, already in chapter");
      return; // early return
    }
    syncVideo(swiperIndex);
  };

  const syncVideo = (swiperIndex) => {
    const video = ThisVideo.current;
    const videoCueId = video.textTracks[0].activeCues[0].id;
    if (swiperIndex.toString() === videoCueId) {
      // this is to stop video seeking triggering
      console.log("Don't update time, already in chapter");
      return;
    }
    const chapterStartTime = video.textTracks[0].cues[swiperIndex].startTime;
    video.currentTime = chapterStartTime;
  };

  // sync Swiper active slide to video currentTime/cue

  useEffect(() => {
    // on load, set an event listener on specific <track> DOM element: onCueChange does not exist in ReactJS, annoyingly
    ThisVideoTrackRef.current.oncuechange = (e) => {
      handleCueChange(e);
    };
  }, []);

  const handleCueChange = (event) => {
    // console.log(event);
    let chapterIndex = event.target.track.activeCues[0].id;
    // console.log("chapterIndex", chapterIndex);
    chapterIndex = parseInt(chapterIndex); // turn id string into an integer
    // if (swiper !== null) {
    swiperRef.current.slideTo(chapterIndex);
    // }
  };

  const videoSourcePath = require("../images/" +
    props.id +
    "/" +
    props.videoFileName);

  const videoTrackPath = require("../images/" +
    props.id +
    "/" +
    props.chapterFileName);

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
              onSwiper={(s) => {
                setSwiper(s);
              }}
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
              <video autoPlay loop muted playsInline controls ref={ThisVideo}>
                <source src={videoSourcePath} />
                <track
                  ref={ThisVideoTrackRef}
                  kind="chapters"
                  label="Locations"
                  src={videoTrackPath}
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
