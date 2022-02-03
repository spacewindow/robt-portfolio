import ProjectHero from "../components/ProjectHero";
import VideoSection from "../components/VideoSection";
import Image1 from "../images/wattyl-100-years/wattyl-mock.jpg";
import Image2 from "../images/wattyl-100-years/wattyl-social.jpg";

function Wattyl100Years() {
  const projectId = "wattyl-100-years";
  return (
    <div className={projectId}>
      <ProjectHero
        title="Wattyl: 100 Years"
        client="Wattyl"
        id={projectId}
        color="#55adf8"
      />
      <section className="section--grey section--intro">
        <div className="grid">
          <div
            className="grid-cell grid6 intro-text"
            style={{ paddingRight: "2rem" }}
          >
            <h2>
              A social-oriented microsite leveraging the 100 year anniversary of
              this iconic brand to re-engage with their customers.
            </h2>
          </div>
          <div className="grid-cell grid3 credits">
            <h3>My Role</h3>
            <p>Web Development</p>
            <p>Graphic Design</p>
          </div>
          <div className="grid-cell grid3">
            <h3>Contributors</h3>
            <p>Mary Cuy, Graphic Design</p>
          </div>
        </div>
      </section>

      <VideoSection
        screenSize="desktop"
        id={projectId}
        videoFileName="wattyl-desktop.mp4"
        swiperHeading="Features"
      />

      <VideoSection
        screenSize="mobile"
        id={projectId}
        videoFileName="wattyl-mobile.mp4"
      />
      <section className="section--grey section--image-blocks">
        <div
          className="image-block image-block--left"
          style={{ backgroundImage: `url(${Image1})` }}
        ></div>
        <div
          className="image-block image-block--right"
          style={{ backgroundImage: `url(${Image2})` }}
        ></div>
      </section>
    </div>
  );
}

export default Wattyl100Years;
