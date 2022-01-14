import { css, cx } from "@emotion/css";
import tinycolor from "tinycolor2";

function ProjectHero(props) {
  const gradient2 = tinycolor(props.color).setAlpha(0).toRgbString();
  const gradient1 = tinycolor(props.color).setAlpha(0.9).toRgbString();

  const heroImage = require("../images/hero-" + props.id + ".jpg");

  const heroStyles = css`
    background-color: ${props.color};
    background-image: url(${heroImage});
    /* &:before {
      background-image: linear-gradient(
        30deg,
        ${gradient1} 10%,
        ${gradient2} 70%
      );
    } */
    h1 {
      color: white;
    }
  `;

  return (
    <section className={"project__header " + heroStyles}>
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
}

export default ProjectHero;
