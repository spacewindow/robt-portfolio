import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Icons } from "./images/icons.svg";
import AppHeader from "./components/AppHeader";
import allStyles from "./style/styles";
import { Global, css } from "@emotion/react";

function App(props) {
  return (
    <>
      <Global styles={allStyles} />
      <Icons />
      <AppHeader isHomepage={props.isHomepage} />
      <Outlet />
      <footer id="contact" className="grid">
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
