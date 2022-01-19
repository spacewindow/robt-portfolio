import Video from "../images/campaign-analytics/campaigns-full.mp4";
import VideoChapters from "../images/campaign-analytics/video-chapters.vtt";
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

function VideoSection(props) {
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
              <SwiperSlide>
                <p>
                  Users login to see an overview of all their active campaigns,
                  with alerts against ad placements that are underperforming.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  The Reporting dashboard visualises key performance metrics,
                  giving users insight into how well their ads are delivering
                  against expected benchmarks.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  Team members can annotate charts and share notes on steps they
                  have taken to optimise ad placement performance.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  Users are provided simple controls to segment their data, make
                  visual comparisons, and better understand their campaign's
                  success.
                </p>
              </SwiperSlide>
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
                  src={VideoChapters}
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
