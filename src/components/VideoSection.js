import videoCues from "./videoCues";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import React, { useState, useRef, forwardRef } from "react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const MyVideo = forwardRef((props, ref) => {
  const { videoRef, swiperRef } = ref;
  const videoSourcePath = require("../images/" +
    props.id +
    "/" +
    props.videoFileName);

  const handleVideoLoad = (e) => {
    let track = e.target.addTextTrack("chapters", "Chapters", "en");
    track.oncuechange = (e) => {
      handleCueChange(e);
    };
    props.cues.forEach((cue) => {
      const newCue = new VTTCue(cue.start, cue.end, cue.text);
      newCue.id = cue.id;
      track.addCue(newCue);
    });
  };

  const handleCueChange = (event) => {
    let chapterIndex = event.target.activeCues[0].id;
    chapterIndex = parseInt(chapterIndex); // turn id string into an integer
    swiperRef.current.slideTo(chapterIndex);
  };

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      controls
      ref={videoRef}
      onLoadedMetadata={handleVideoLoad}
    >
      <source src={videoSourcePath} />
    </video>
  );
});

function VideoSection(props) {
  // Read WebVTT file and convert to object with cues Array

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

  const videoRef = useRef();
  const cuesArray = videoCues[props.id];

  // sync video currentTime / cue to Swiper active slide

  const handleSlideChange = (e) => {
    // Seeking in the video control will trigger handleCueChange, which also triggers a slideChange. In this case, we don't want to syncVideo (which has the effect of sending the video back to the start of the current chapter)
    // So check whether active Cue id and slide activeIndex are the same already ...
    const swiperIndex = swiperRef.current.activeIndex;
    const videoCueId = videoRef.current.textTracks[0].activeCues[0].id;
    if (swiperIndex.toString() === videoCueId) {
      // this is to stop video seeking triggering
      console.log("Don't update time, already in chapter");
      return; // early return ...
    } // ... otherwise
    syncVideo(swiperIndex);
  };

  const syncVideo = (swiperIndex) => {
    const video = videoRef.current;
    const videoCueId = video.textTracks[0].activeCues[0].id;
    if (swiperIndex.toString() === videoCueId) {
      // this is to stop video seeking triggering
      console.log("Don't update time, already in chapter");
      return;
    }
    const chapterStartTime = video.textTracks[0].cues[swiperIndex].startTime;
    video.currentTime = chapterStartTime;
  };

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
              {cuesArray.map((cue, index) => (
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
              <MyVideo
                ref={{ videoRef: videoRef, swiperRef: swiperRef }}
                id={props.id}
                videoFileName={props.videoFileName}
                cues={cuesArray}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
