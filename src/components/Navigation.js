import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </nav>
  );
};

export default Navigation;
