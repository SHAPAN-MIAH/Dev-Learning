import React from "react";
import Nav from "./Navbar/Nav";
import classes from "../Styles/Layout.module.css";
import Home from "./Pages/Home/Home";

const Layout = ({ Children }) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>
          <Home />
        </div>
      </main>
    </>
  );
};

export default Layout;
