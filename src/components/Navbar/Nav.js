import React from "react";
import logo from "../../assets/images/Dl logo.png";
import Account from "./Account";
import Classes from "../../Styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={Classes.brand}>
              <img src={logo} alt="" />
              <h3>ev Learn</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
};

export default Nav;
