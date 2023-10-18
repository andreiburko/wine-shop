import React from "react";
import { NavLink } from "react-router-dom";

import "./PagesLinks.css";

function PagesLinks() {

  function getLinkClass(obj) {
    let className = "page-link";
    if (obj.isActive) {
      className += " page-link_activ";
    }
    return className;
  };

  return (
    <div className="pages-links-block">
      <NavLink to="/" end className={getLinkClass}>All wines</NavLink>
      <NavLink to="/italy" className={getLinkClass}>Wine from Italy</NavLink>
      <NavLink to="/spain" className={getLinkClass}>Wine from Spain</NavLink>
      <NavLink to="/france" className={getLinkClass}>Wine from France</NavLink>
      <NavLink to="/new-world" className={getLinkClass}>New World Wine</NavLink>
    </div>
  );
}

export default PagesLinks;
