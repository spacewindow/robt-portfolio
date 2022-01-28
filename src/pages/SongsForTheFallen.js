import AppFooter from "../components/AppFooter";
import ProjectHero from "../components/ProjectHero";
import VideoSection from "../components/VideoSection";

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
      <VideoSection
        screenSize="desktop"
        id={projectId}
        videoFileName="video-songs-update.mp4"
        chapterFileName="songs-chapters.vtt"
        swiperHeading="Features"
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
