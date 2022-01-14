import Wizard from "../images/animated-characters/character-wizard.mp4";
import ProjectHero from "../components/ProjectHero";

console.log("Wizard", Wizard);

function AnimatedCharacters() {
  return (
    <>
      <ProjectHero
        title="Brand characters"
        client="Playground XYZ"
        id=""
        color="#fa83ab"
      />
      <section className="section--intro">
        <div className="grid">
          <div
            className="grid-cell grid6 intro-text"
            style={{ paddingRight: "2rem" }}
          >
            <h2>
              I created several animated characters to add a delightful touch to
              Playground XYZ’s branding and products.
            </h2>
          </div>
          <div className="grid-cell grid6 credits">
            <h3>My Role</h3>
            <p>Illustration</p>
            <p>Animation (GSAP and Animate CC)</p>
            <p>Editing and conversion</p>
          </div>
        </div>
      </section>

      <section className="section--vids display--desktop section--image-blocks wizard">
        <div
          className="image-block image-block--left"
          style={{ background: "white" }}
        >
          <div className="video-slide main-slide">
            <video autoPlay loop muted playsInline>
              <source src={Wizard} />
            </video>
          </div>
        </div>
        <div
          className="image-block image-block--right"
          style={{ background: "#e91e63" }}
          id="wizard-context"
        >
          <div className="grid-cell grid12 grid-cell--display">
            <div className="display__screen__wrapper">
              <div className="display__screen">
                <div className="video-slide">
                  <video autoPlay loop muted playsInline>
                    <source src="../images/animated-characters/character-wizard-context.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--vids display--mobile section--image-blocks player">
        <div
          className="image-block image-block--left"
          style={{ background: "#F0A05A" }}
        >
          <div className="grid-cell grid12 grid-cell--display">
            <div className="display__screen__wrapper">
              <div className="display__screen">
                <div className="video-slide">
                  <video autoPlay loop muted playsInline>
                    <source src="../images//animated-characters/character-player-context.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-block image-block--right">
          <div className="video-slide main-slide">
            <video autoPlay loop muted playsInline>
              <source src="../images/animated-characters/character-player.mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="section--vids display--mobile section--image-blocks">
        <div className="image-block image-block--left">
          <div className="video-slide main-slide">
            <video autoPlay loop muted playsInline>
              <source src="../images/animated-characters/character-runner.mp4" />
            </video>
          </div>
        </div>
        <div
          className="image-block image-block--right"
          style={{ background: "#B01414" }}
        >
          <div className="grid-cell grid12 grid-cell--display">
            <div className="display__screen__wrapper">
              <div className="display__screen">
                <div className="video-slide">
                  <video autoPlay loop muted playsInline>
                    <source src="../images//animated-characters/character-runner-context.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--vids section--image-full">
        <div
          className="image-full"
          style={{
            backgroundImage:
              "url(../images/animated-characters/character-sketches.jpg)",
          }}
        ></div>
      </section>
    </>
  );
}

export default AnimatedCharacters;
