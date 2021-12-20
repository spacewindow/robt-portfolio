import projects from "../projects";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      {projects.map(({ id, title }, index) => (
        <p key={"title" + index}>
          <Link to={"/work/" + id}>{title}</Link>
        </p>
      ))}
    </div>
  );
}

export default Work;
