import { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import animation1Data from "../images/e-newsletters/animation1.json";
import animation2Data from "../images/e-newsletters/animation2.json";
import animation3Data from "../images/e-newsletters/animation3.json";
import ProjectHero from "../components/ProjectHero";

function ENewsletters() {
  const [animations, _setAnimations] = useState([]);
  // Because I am going to use this state in event handlers / listeners below, i have to make a ref to the state https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559. PS WTF??? I thought this kind of shit was the whole point of state

  const animationsRef = useRef(animations);
  const setAnimations = (data) => {
    animationsRef.current = data;
    _setAnimations(data);
  };

  const blocksLottieRef = useRef(null);
  const blocksContainerRef = useRef(null);

  const scrollLottieRef = useRef(null);
  const scrollAnimContainerRef = useRef(null);

  // made a locally scoped function for Element.getBoundingClientRect() so I unpack the properties I want from the DOMRect element into an Object instead

  const getBoundingClientRect = (element) => {
    const { top, right, bottom, left, width, height, x, y } =
      element.getBoundingClientRect();
    return { top, right, bottom, left, width, height, x, y };
  };

  // on render, get the bits I need out of my refs into State rect position (esp. from top of document) of each animation block

  useEffect(() => {
    const animationsUpdate = [
      ...animations,
      {
        id: "blocks",
        rect: getBoundingClientRect(blocksContainerRef.current),
        totalFrames: blocksLottieRef.current.anim.totalFrames,
      },
    ];
    setAnimations(animationsUpdate);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const anim = animationsRef.current.find((anim) => (anim.id = "blocks"));

    const blocksProgress = progress(anim, 0) - 0.00001; // Lottie bug - 100% progress always shows blank frame :{ Did not need a whole integer for current frame, thankfully

    const blocksFrame = anim.totalFrames * blocksProgress;

    blocksLottieRef.current.anim.goToAndStop(blocksFrame, true);
  };

  const progress = (animation, offsetStart) => {
    var scrollTopStart = animation.rect.top - offsetStart;
    var scrollTopEnd = animation.rect.height / 2 + scrollTopStart;

    var currentPosition = window.pageYOffset;
    var progress;
    if (currentPosition < scrollTopStart) {
      progress = 0;
    } else if (currentPosition > scrollTopEnd) {
      progress = 1;
    } else {
      progress =
        (currentPosition - scrollTopStart) / (scrollTopEnd - scrollTopStart);
    }
    return progress;
  };

  const projectId = "e-newsletters";

  return (
    <div>
      <ProjectHero
        title="E-newsletters"
        client="CGU Insurance"
        id={projectId}
        color="#1AA954"
      />
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
                  from the customer's profile, or based on their interests using
                  smart audience segmenting in Salesforce Marketing Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-block image-block--right">
          <Lottie
            animationData={animation1Data}
            options={{
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
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
        <div
          className="image-block image-block--right"
          ref={blocksContainerRef}
        >
          <Lottie
            ref={blocksLottieRef}
            // animationData={animation2Data}
            options={{
              autoplay: false,
              loop: false,
              animationData: animation2Data,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
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
            <div className="display__screen" ref={scrollAnimContainerRef}>
              <Lottie
                ref={scrollLottieRef}
                // animationData={animation3Data}
                options={{
                  autoplay: false,
                  loop: false,
                  animationData: animation3Data,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="email-desktop"></section>
    </div>
  );
}

export default ENewsletters;
