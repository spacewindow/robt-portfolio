import ProjectHero from "../components/ProjectHero";
import SlideVideo0 from "../images/campaign-analytics/campaigns_0.mp4";
import SlideVideo1 from "../images/campaign-analytics/campaigns_1.mp4";
import SlideVideo2 from "../images/campaign-analytics/campaigns_2.mp4";
import SlideVideo3 from "../images/campaign-analytics/campaigns_3.mp4";
import Image1 from "../images/campaign-analytics/detail6.jpg";
import Image2 from "../images/campaign-analytics/detail5.jpg";
import Image3 from "../images/campaign-analytics/detail3.jpg";
import Image4 from "../images/campaign-analytics/detail4.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

function CampaignAnalytics() {
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
            <div className="display__captions">
              <div className="caption caption1">
                <p>
                  Campaigns Listing: a overview of all your active campaigns,
                  with alerts against placements that are underperforming.
                </p>
              </div>
              <div className="caption caption2">
                <p>
                  Reporting Dashboard: data visualisations of key performance
                  metrics give users insight into how the campaign is
                  delivering, or generating audience engagement.
                </p>
              </div>
              <div className="caption caption3">
                <p>
                  Notes and chart annotations assist team members to communicate
                  effectively on steps taken to optimise performance.
                </p>
              </div>
              <div className="caption caption4">
                <p>
                  Users gain insight into their campaign success by using simple
                  controls to segment their data and make visual comparisons.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-cell grid9 grid-cell--display">
            <div className="display__screen__wrapper">
              <div className="display__screen">
                <Swiper navigation={true} className="mySwiper">
                  <SwiperSlide>
                    <video autoPlay loop muted playsInline>
                      <source src={SlideVideo0} />
                    </video>
                  </SwiperSlide>
                  <SwiperSlide>
                    <video autoPlay loop muted playsInline>
                      <source src={SlideVideo1} />
                    </video>
                  </SwiperSlide>
                  <SwiperSlide>
                    <video autoPlay loop muted playsInline>
                      <source src={SlideVideo2} />
                    </video>
                  </SwiperSlide>
                  <SwiperSlide>
                    <video autoPlay loop muted playsInline>
                      <source src={SlideVideo3} />
                    </video>
                  </SwiperSlide>
                </Swiper>
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
            <a
              target="_blank"
              href="/images/campaign-analytics/Rob Thwaites - Campaign Analytics UX.pdf"
            >
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
