import Image1 from "../images/e-newsletters/email-personalised.jpg";
import Image2 from "../images/e-newsletters/email-red1.jpg";
import Image3 from "../images/e-newsletters/email-red2.jpg";
import Image4 from "../images/e-newsletters/email-red3.jpg";
import Image5 from "../images/e-newsletters/email-red4.jpg";
// import Image6 from "../images/e-newsletters/email-newsletter.jpg";
// import Image7 from "../images/e-newsletters/mod-block-2.jpg";
// import Image8 from "../images/e-newsletters/mod-block-1.png";
// import Image9 from "../images/e-newsletters/mod-block-3.png";
// import Image10 from "../images/e-newsletters/mod-block-4.png";
import Image11 from "../images/e-newsletters/edm-mobile.jpg";
import Lottie from "react-lottie";
import animation1Data from "../images/e-newsletters/animation1.json";
import animation2Data from "../images/e-newsletters/animation2.json";
import animation3Data from "../images/e-newsletters/animation3.json";

function ENewsletters() {
  const lottieOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animation1Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animation2Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animation3Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <section className="section--intro">
        <div className="grid">
          <div
            className="grid-cell grid6 intro-text"
            style={{ paddingRight: "2rem" }}
          >
            <h2>
              CGU needed a fresh approach to their email communications,
              allowing for more personalised content for both customers and
              brokers.
            </h2>
          </div>
          <div className="grid-cell grid6 credits">
            <h3>My Role</h3>
            <p>UX Consultation</p>
            <p>Graphic Design</p>
            <p>HTML Email Development</p>
          </div>
        </div>
      </section>

      <section className="section--scroll" id="email-dynamic">
        <div className="image-block image-block--left">
          <div className="grid">
            <div className="grid-cell grid12">
              <div className="sticky-element">
                <h4>Personalised Content</h4>
                <p>
                  Emails could be populated with dynamically generated content
                  from the customer’s profile, or based on their interests using
                  smart audience segmenting in Salesforce Marketing Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-block image-block--right">
          <Lottie options={lottieOptions1} />
        </div>
      </section>

      <section className="section--scroll" id="email-main">
        <div className="image-block image-block--left">
          <div className="grid">
            <div className="grid-cell grid12">
              <div className="sticky-element">
                <h4>Modular Blocks</h4>
                <p>
                  I took a component-based approach to the design, so that
                  marketers could be drag-and-drop reusable email blocks
                  depending on their needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-block image-block--right">
          <Lottie options={lottieOptions2} />
        </div>
      </section>

      <section className="display--mobile" id="email-mobile">
        <div className="caption-block">
          <h4>Responsive design</h4>
          <p>
            Each component was designed to display perfectly on all email
            clients.
          </p>
        </div>

        <div className="grid-cell grid12 grid-cell--display">
          <div className="display__screen__wrapper">
            <div className="display__screen">
              <Lottie options={lottieOptions3} />
            </div>
          </div>
        </div>
      </section>

      <section id="email-desktop"></section>
    </div>
  );
}

export default ENewsletters;
