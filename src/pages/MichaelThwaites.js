import ProjectHero from "../components/ProjectHero";
import VideoSection from "../components/VideoSection";
import AppFooter from "../components/AppFooter";
import Image1 from "../images/michael-thwaites/michael-thwaites-detail2.jpg";
import Image2 from "../images/michael-thwaites/michael-thwaites-detail1.jpg";

function MichaelThwaites() {
  const projectId = "michael-thwaites";
  return (
    <div className={projectId}>
      <ProjectHero
        title="Michael Thwaites: Australian Poet"
        client="Personal Project"
        id={projectId}
        color="#9a644d"
      />
      <section className="section--grey section--intro">
        <div className="grid">
          <div
            className="grid-cell grid6 intro-text"
            style={{ paddingRight: "2rem" }}
          >
            <h2>
              A site to showcase the work of my grandfather, a distinguished
              Australian poet, with words, imagery and audio.
            </h2>
          </div>
          <div className="grid-cell grid6 credits">
            <h3>My Role</h3>
            <p>UX Design</p>
            <p>Graphic Design</p>
            <p>Front-End Development</p>
            <p>Wordpress CMS</p>
          </div>
        </div>
      </section>

      <VideoSection
        screenSize="desktop"
        id={projectId}
        videoFileName="thwaites-edit.mp4"
        swiperHeading="Features"
      />

      <section
        className="section--grey section--image-full"
        id="michael-thwaites-ipad"
      >
        <div className="caption-block">
          <p>
            Other pages include information about the author, a podcast of
            poetry readings, press clippings and publications.
          </p>
        </div>
      </section>

      <section className="section--intro section--details">
        <div className="grid">
          <div className="grid-cell grid6 intro-text">
            <img src={Image1} alt="" />
            <p>
              Facebook, Twitter and Pinterest APIs were integrated for social
              sharing of content.
            </p>
          </div>
          <div className="grid-cell grid6 credits">
            <img src={Image2} alt="" />
            <p>Custom Wordpress CMS management of text, imagery and audio.</p>
          </div>
        </div>
      </section>

      <section id="michael-thwaites-imagery">
        <div className="caption-block">
          <p>
            Family albums were raided to create imagery to accompany each poem.
          </p>
        </div>
      </section>
      <AppFooter
        previous={{
          id: "wattyl-100-years",
          client: "Wattyl",
          title: "Wattyl: 100 Years",
        }}
      />
    </div>
  );
}

export default MichaelThwaites;
