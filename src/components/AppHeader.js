import { css, cx } from "@emotion/css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import mq from "../style/mediaQueries";

function AppHeader(props) {
  const [solidHeader, setSolidHeader] = useState(true);
  console.log("solidHeader", solidHeader);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      setSolidHeader(currPos.y);
    },
    [solidHeader]
  );
  const headerInit = css`
    &:after {
      opacity: 0;
    }
    .app__logo {
      transform: translateY(0%);
      #logo-circle {
        opacity: 1;
      }
      #logo {
        opacity: 0;
      }
    }
    .app__menu__links {
      transform: translateY(50%);
      a {
        color: #ffffff;
      }
      ${mq.compact} {
        transform: translateY(40%);
      }
    }
  `;

  const showHeader = solidHeader >= 0 ? headerInit : null;

  return (
    <div className={"app__header grid " + showHeader}>
      <div className="grid-cell">
        <Link to="/">
          <svg
            className="app__logo"
            viewBox="0 0 300 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <use id="logo" x="0" y="0" xlinkHref="#logo"></use>
            <use id="logo-circle" x="0" y="0" xlinkHref="#logo-circle"></use>
          </svg>
        </Link>
      </div>

      <div className="app__menu__links">
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <HashLink to="#contact">Contact</HashLink>
      </div>
    </div>
  );
}

export default AppHeader;
