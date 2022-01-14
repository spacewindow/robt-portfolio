const SectionHeader = (props) => {
  const bgImage = ./images/hero-" + props.id + ".jpg");
  return (
    <section
      className="project__header"
      style={{
        backgroundColor: props.color,
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="grid">
        <div className="grid-cell grid12">
          <div className="project__header__title">
            <h1>{props.title}</h1>
            <h3>{props.client}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

function SongsForTheFallen() {
  return (
    <>
      <div className="app__body">
        <SectionHeader
          id="songs-for-the-fallen"
          title="Songs for the Fallen"
          client="Critical Stages"
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

        <section className="display display--chapter display--desktop">
          <div className="grid no-gutter grid--column-grid">
            <div className="grid-cell grid4 top-content">
              <h4 style={{ width: "100%" }}>Features</h4>
            </div>

            <div className="grid-cell grid4 bottom-content">
              <div className="display__captions"></div>
            </div>

            <div className="grid-cell grid8 grid-cell--display">
              <div className="display__screen__wrapper">
                <div className="display__screen">
                  <div className="video-slide">
                    <video autoPlay loop muted playsInline>
                      <source
                        src={./images/songs-for-the-fallen/video-songs-edit.mp4"
                      />
                      <track
                        kind="chapters"
                        label="Locations"
                        src={./images/songs-for-the-fallen/songs-chapters.vtt"
                        srcLang="en"
                        default
                        type="text/vtt"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section--details first">
          <div className="grid">
            <div className="grid-cell grid6 intro-text">
              <img
                src={./images/songs-for-the-fallen/songs-details1.jpg"
                alt=""
              />
            </div>
            <div className="grid-cell grid6 credits">
              <img
                src={./images/songs-for-the-fallen/songs-details2.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="section--details last">
          <div className="grid">
            <div className="grid-cell grid6 intro-text">
              <img
                src={./images/songs-for-the-fallen/songs-details3.jpg"
                alt=""
              />
            </div>
            <div className="grid-cell grid6 credits">
              <img
                src={./images/songs-for-the-fallen/songs-details4.jpg"
                alt=""
              />
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
            style={{
              backgroundImage: ./images/songs-for-the-fallen/songs-title.jpg"),
            }}
          ></div>
        </section>

        <section className="section--details">
          <div className="grid">
            <div className="grid-cell grid6 intro-text">
              <img
                src={./images/songs-for-the-fallen/songs-brand1.png"
                alt=""
              />
            </div>
            <div className="grid-cell grid6 credits">
              <img
                src={./images/songs-for-the-fallen/songs-brand2.png"
                alt=""
              />
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
      </div>
    </>
  );
}

export default SongsForTheFallen;
