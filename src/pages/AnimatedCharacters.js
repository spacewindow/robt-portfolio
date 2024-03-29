import ProjectHero from "../components/ProjectHero";
import AppFooter from "../components/AppFooter";
import WizardVideo from "../images/animated-characters/character-wizard.mp4";
import WizardContextVideo from "../images/animated-characters/character-wizard-context.mp4";
import PlayerVideo from "../images/animated-characters/character-player.mp4";
import PlayerContextVideo from "../images/animated-characters/character-player-context.mp4";
import RunnerVideo from "../images/animated-characters/character-runner.mp4";
import RunnerContextVideo from "../images/animated-characters/character-runner-context.mp4";
import CharacterSketches from "../images/animated-characters/character-sketches.jpg";

function AnimatedCharacters() {
  const projectId = "animated-characters";
  return (
    <div className={projectId}>
      <ProjectHero
        title="Brand characters"
        client="Playground XYZ"
        id="animated-characters"
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
              <source src={WizardVideo} />
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
                    <source src={WizardContextVideo} />
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
                    <source src={PlayerContextVideo} />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-block image-block--right">
          <div className="video-slide main-slide">
            <video autoPlay loop muted playsInline>
              <source src={PlayerVideo} />
            </video>
          </div>
        </div>
      </section>

      <section className="section--vids display--mobile section--image-blocks">
        <div className="image-block image-block--left">
          <div className="video-slide main-slide">
            <video autoPlay loop muted playsInline>
              <source src={RunnerVideo} />
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
                    <source src={RunnerContextVideo} />
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
            backgroundImage: "url(" + CharacterSketches + ")",
          }}
        ></div>
      </section>
      <AppFooter
        previous={{
          id: "store-locator",
          client: "Playground XYZ",
          title: "Store Locator",
        }}
        next={{
          id: "e-newsletters",
          client: "CGU Insurance",
          title: "E-Newsletters",
        }}
      />
    </div>
  );
}

export default AnimatedCharacters;
