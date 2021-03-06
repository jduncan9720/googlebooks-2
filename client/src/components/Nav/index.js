import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">
        Google-Books Search
      </a>
      
      <a className="navbar-search" href="/">
        Search
      </a>
      <a className="navbar-saved" href="/saved">
        Saved
      </a>

    </nav>
  );
}

export default Nav;
