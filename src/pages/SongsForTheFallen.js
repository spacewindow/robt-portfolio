import AppFooter from "../components/AppFooter";
import ProjectHero from "../components/ProjectHero";
import VideoSection from "../components/VideoSection";
import Image1 from "../images/songs-for-the-fallen/songs-title.jpg";
import Image2 from "../images/songs-for-the-fallen/songs-details1.jpg";
import Image3 from "../images/songs-for-the-fallen/songs-details2.jpg";
import Image4 from "../images/songs-for-the-fallen/songs-details3.jpg";
import Image5 from "../images/songs-for-the-fallen/songs-details4.jpg";
import Image6 from "../images/songs-for-the-fallen/songs-brand1.png";
import Image7 from "../images/songs-for-the-fallen/songs-brand2.png";

function SongsForTheFallen() {
  const projectId = "songs-for-the-fallen";
  return (
    <div>
      <ProjectHero
        title="Songs for the Fallen"
        client="Critical Stages"
        id={projectId}
        color="#c80511"
      />

      <section className="section--grey section--intro">
        <div className="grid">
          <div
            className="grid-cell grid6 intro-text"
            style={{ paddingRight: "2rem" }}
          >
            <h2>
              A responsive website to showcase the sites and sounds, and raise
              touring funds, for this hit cabaret show.
            </h2>
          </div>
          <div className="grid-cell grid6 credits">
            <h3>My Role</h3>
            <p>UX Consultation</p>
            <p>Graphic Design</p>
            <p>Front-End Developmemt</p>
            <p>Wordpress CMS</p>
          </div>
        </div>
      </section>
      <VideoSection
        screenSize="desktop"
        id={projectId}
        videoFileName="video-songs-update.mp4"
        chapterFileName="songs-chapters.vtt"
        swiperHeading="Features"
      />
      <section className="section--details first">
        <div className="grid">
          <div className="grid-cell grid6 intro-text">
            <img src={Image2} alt="" />
          </div>
          <div className="grid-cell grid6 credits">
            <img src={Image3} alt="" />
          </div>
        </div>
      </section>

      <section className="section--details last">
        <div className="grid">
          <div className="grid-cell grid6 intro-text">
            <img src={Image4} alt="" />
          </div>
          <div className="grid-cell grid6 credits">
            <img src={Image5} alt="" />
          </div>
        </div>
      </section>

      <section className="section--grey section--image-blocks">
        <div className="image-block image-block--left">
          <div className="grid">
            <div className="grid-cell grid12">
              <h4>Branding</h4>
              <p>
                I developed new visual identity for the show, which was
                subsequently used across web, print and social media channels.
              </p>
            </div>
          </div>
        </div>
        <div
          className="image-block image-block--right"
          style={{ backgroundImage: `url(${Image1})` }}
        ></div>
      </section>

      <section className="section--details">
        <div className="grid">
          <div className="grid-cell grid6 intro-text">
            <img src={Image6} alt="" />
          </div>
          <div className="grid-cell grid6 credits">
            <img src={Image7} alt="" />
          </div>
        </div>
      </section>

      <section
        className="section--grey section--image-full"
        id="songs-responsive"
      >
        <div className="caption-block">
          <h4>Responsive Design</h4>
          <p>
            Each component was designed to display perfectly on all device
            sizes.
          </p>
        </div>
      </section>
      <AppFooter
        previous={{
          id: "campaign-analytics",
          client: "Playground XYZ",
          title: "Campaign Analytics",
        }}
        next={{
          id: "store-locator",
          client: "Playground XYZ",
          title: "Store Locator",
        }}
      />
    </div>
  );
}

export default SongsForTheFallen;
