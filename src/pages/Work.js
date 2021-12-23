import projects from "../projects";
import { Link } from "react-router-dom";

function Work() {
  return (
    <>
      <section className="index-title">
        <div className="grid">
          <div className="grid-cell grid11 offset1 index__title">
            <h1>
              I'm Rob Thwaites. I co-design digital products with the people who
              will use them.
            </h1>

            <p>
              <a href="/about">Find out about my approach and skills.</a>
            </p>
          </div>
        </div>
      </section>
      <section className="works">
        <div className="grid">
          {projects.map(({ id, title, client }, index) => (
            <div key={"title" + index} className="grid-cell grid6 work">
              <Link to={"/work/" + id}>
                <img src={require("../images/thumb-" + id + ".jpg")} alt="" />
                <div className="work__details">
                  <p className="work__client">{client}</p>
                  <h3 className="work__name">{title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;
