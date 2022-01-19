import ProjectHero from "../components/ProjectHero";
import Video from "../images/campaign-analytics/campaigns-full.mp4";
import VideoChapters from "../images/campaign-analytics/video-chapters.vtt";
import Image1 from "../images/campaign-analytics/detail6.jpg";
import Image2 from "../images/campaign-analytics/detail5.jpg";
import Image3 from "../images/campaign-analytics/detail3.jpg";
import Image4 from "../images/campaign-analytics/detail4.jpg";
import pdf from "../images/campaign-analytics/Rob Thwaites - Campaign Analytics UX.pdf";
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

function CampaignAnalytics() {
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
    <>
      <ProjectHero
        title="Campaign Analytics"
        client="Playground XYZ"
        id="campaign-analytics"
        color="#55adf8"
      />
      <section className="section--grey section--intro">
        <div className="grid">
          <div
            className="grid-cell grid6 intro-text"
            style={{ paddingRight: "2rem" }}
          >
            <h2>
              Data visualisation screens to give clients rapid insight into the
              performance of their mobile advertising campaigns.
            </h2>
          </div>
          <div className="grid-cell grid6 credits">
            <h3>My Role</h3>
            <p>UX Design</p>
            <p>Graphic Design</p>
            <p>HTML / CSS / JS</p>
          </div>
        </div>
      </section>

      <section className="display display--slider display--desktop">
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
              <div
                ref={paginationRef}
                className="swiper-pagination-custom"
              ></div>
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
                    Users login to see an overview of all their active
                    campaigns, with alerts against ad placements that are
                    underperforming.
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
                    Team members can annotate charts and share notes on steps
                    they have taken to optimise ad placement performance.
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    Users are provided simple controls to segment their data,
                    make visual comparisons, and better understand their
                    campaign's success.
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

      <section className="section--details first">
        <div className="grid">
          <div className="grid-cell grid6 ">
            <div className="vignette">
              <img src={Image1} />
            </div>
          </div>
          <div className="grid-cell grid6 ">
            <div className="vignette">
              <img src={Image2} />
            </div>
          </div>
        </div>
      </section>

      <section className="section--details last">
        <div className="grid">
          <div className="grid-cell grid6 ">
            <div className="vignette">
              <img src={Image3} />
            </div>
          </div>
          <div className="grid-cell grid6  ">
            <img src={Image4} />
          </div>
        </div>
      </section>

      <section id="campaign-ux">
        <div className="caption-block">
          <p>
            This dashboard was the culmination of user research activities
            including contextual research, user interviews and surveys.
          </p>
          <p>
            I produced personas and user flows to surface the many manual steps
            (pain points) currently required to create campaign reports.
            Elimating these steps was the primary purpose of our reporting
            interfaces.
          </p>
          <p>
            <a target="_blank" href={pdf}>
              <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
                <use x="0" y="0" xlinkHref="#pdf"></use>
              </svg>
              View personas and user flows
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default CampaignAnalytics;
