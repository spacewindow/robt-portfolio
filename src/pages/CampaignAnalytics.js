import ProjectHero from "../components/ProjectHero";
import VideoSection from "../components/VideoSection";
import Image1 from "../images/campaign-analytics/detail6.jpg";
import Image2 from "../images/campaign-analytics/detail5.jpg";
import Image3 from "../images/campaign-analytics/detail3.jpg";
import Image4 from "../images/campaign-analytics/detail4.jpg";
import pdf from "../images/campaign-analytics/Rob Thwaites - Campaign Analytics UX.pdf";

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

      <VideoSection
        screenSize="desktop"
        id="campaign-analytics"
        videoFileName="campaigns-full.mp4"
        chapterFileName="video-chapters.vtt"
      />

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
