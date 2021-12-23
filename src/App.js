import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Icons } from "./images/icons.svg";

function App() {
  return (
    <>
      <div className="app__header grid">
        <Icons />
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
          <a href="/#work">Work</a>
          <a href="/about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>
      <Outlet />
      <footer name="#contact" className="grid">
        <div className="grid-cell grid12">
          <div className="footer__signoff">
            <h2>Let's create something together</h2>
            <div className="footer__signoff__links">
              <a className="footer__email" href="mailto:rob@robthwaites.com">
                rob@robthwaites.com
              </a>
              <a className="footer__phone" href="tel:+61403899183">
                0403 899 183
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
