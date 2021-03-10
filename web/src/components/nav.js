import React from "react";
import { Link } from "react-scroll";

const Nav = () => (
  <nav>
    <ul className="nav-content remove-bullets">
      <li>
        <Link
          to="om"
          smooth={true}
          offset={50}
          duration={750}
          onSetActive={true}
          smooth="easeInOutCubic"
        >
          Om
        </Link>
      </li>
      <li>
        <Link
          to="arrangementer"
          smooth={true}
          offset={50}
          duration={750}
          onSetActive={true}
          smooth="easeInOutCubic"
        >
          Arrangmenter
        </Link>
      </li>
      <li>
        <Link
          to="blogg"
          smooth={true}
          offset={50}
          duration={750}
          onSetActive={true}
          smooth="easeInOutCubic"
        >
          Blogg
        </Link>
      </li>
      <li>
        <Link
          to="styret"
          smooth={true}
          offset={50}
          duration={750}
          onSetActive={true}
          smooth="easeInOutCubic"
        >
          Styret
        </Link>
      </li>
      <li>
        <Link
          to="kontakt"
          smooth={true}
          offset={50}
          duration={750}
          onSetActive={true}
          smooth="easeInOutCubic"
        >
          Kontakt
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
