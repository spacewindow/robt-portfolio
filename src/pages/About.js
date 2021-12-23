function About() {
  return (
    <>
      <section className="index-title">
        <div className="grid">
          <div className="grid-cell grid11 offset1 index__title">
            <h1>About Rob</h1>
          </div>

          <div className="grid-cell grid7 offset3 ">
            <p>
              I help clients clearly articulate their product vision, then use a
              suite of research, co-design and digital skills to guide them
              through the stages of design to realise this vision.
            </p>
            <p>
              My role as product designer is to make the product experience as
              tangible as possible, as early as possible. This can be through a
              sketch, a journey map, or a hi-fidelity prototype... whatever is
              required to help steward a unified vision of the product for
              stakeholders and the team.
            </p>
            <p>
              I am a deeply empathetic person, passionate about designing
              delightful tech that makes a real difference in people's lives.
            </p>

            <p>
              <a
                href="/images/about/Robert_Thwaites-Product_Designer-CV.pdf"
                target="_blank"
              >
                View my full CV
              </a>
            </p>
          </div>

          <div className="grid-cell grid7 offset3">
            <div className="royalSlider rsDefaultInv about-slider ">
              <div className="rsContent">
                <img
                  className="rsImage"
                  src="/images/about/Discover.png"
                  alt=""
                />
                <div className="rsTmb">Discover.</div>
              </div>
              <div className="rsContent">
                <img
                  className="rsImage"
                  src="/images/about/Iterate.png"
                  alt=""
                />
                <div className="rsTmb">Iterate.</div>
              </div>
              <div className="rsContent">
                <img
                  className="rsImage"
                  src="/images/about/Prototype.png"
                  alt=""
                />
                <div className="rsTmb">Prototype.</div>
              </div>
              <div className="rsContent">
                <img
                  className="rsImage"
                  src="/images/about/Evaluate.png"
                  alt=""
                />
                <div className="rsTmb">Evaluate.</div>
              </div>
              <div className="rsContent">
                <img
                  className="rsImage"
                  src="/images/about/Beautify.png"
                  alt=""
                />
                <div className="rsTmb">Beautify.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
