import { css, cx } from "@emotion/css";
import { Link } from "react-router-dom";
import mq from "../style/mediaQueries";

function AppFooter(props) {
  return (
    <section class="footer-links">
      {props.previous && (
        <a class="previous" href={`/work/${props.previous.id}`}>
          <div class="footer-links__thumb">
            <span class="footer-links__client">{props.previous.client}</span>

            <span class="footer-links__title">{props.previous.title}</span>
          </div>
          <div class="footer-links__chevron footer-links__chevron--left">
            <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
              <use x="0" y="0" xlinkHref="#chevron-left"></use>
            </svg>
          </div>
        </a>
      )}
      {props.next && (
        <a class="next" href={`/work/${props.next.id}`}>
          <div class="footer-links__thumb">
            <span class="footer-links__client">{props.next.client}</span>
            <span class="footer-links__title">{props.next.title}</span>
          </div>
          <div class="footer-links__chevron footer-links__chevron--right">
            <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
              <use x="0" y="0" xlinkHref="#chevron-right"></use>
            </svg>
          </div>
        </a>
      )}
    </section>
  );
}

export default AppFooter;
