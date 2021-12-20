import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Rob Thwaites :: Product Designer</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Work</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
