import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import "./WineControls.css";

function WineControls( {cbChangedFilter, cbChangedSort, cbChangeOutputType} ) {

  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState("all");
  const [isShowPages, setIsShowPages] = useState("all");

  const location = useLocation();

  useEffect( () => {
    setFilterValue("all");
    setSortValue("all");
  }, [location]
  );

  function switchFilter(event) {
    cbChangedFilter(event.target.value);
    setFilterValue(event.target.value);
  };

  function switchSort(event) {
    cbChangedSort(event.target.value);
    setSortValue(event.target.value);
  };

  function switchIsShowPages(event) {
    const state = event.target.value === "page" ? true : false;
    setIsShowPages(event.target.value);
    cbChangeOutputType(state);
  };

  return (
    <div className="filter-and-sort-block">
      <div className="filter-select-wrap">
        <select name="filter-select" value={filterValue} onChange={switchFilter}>
          <option value="all">No filter</option>
          <optgroup label="Flavour">
            <option value="red">Red wine</option>
            <option value="white">White wine</option>
          </optgroup>
          <optgroup label="Type">
            <option value="dry">Dry</option>
            <option value="semi-dry">Semi-dry</option>
            <option value="semi-sweet">Semi-sweet</option>
            <option value="sweet">Sweet</option>
          </optgroup>
        </select>
      </div>

      <div className="sort-select-wrap">
        <select name="sort-select" value={sortValue} onChange={switchSort}>
          <option value="all">No sorting</option>
          <option value="raiting-decrease">Descending rate</option>
          <option value="raiting-increase">Ascending rate</option>
          <option value="price-decrease">Descending price</option>
          <option value="price-increase">Ascending price</option>
        </select>
      </div>

      <div className="show-pages-wrap">
        <select name="show-pages-select" value={isShowPages} onChange={switchIsShowPages}>
          <option value="page">Show by pages</option>
          <option value="all">Show full list</option>
        </select>
      </div>
    </div>
  );
}

WineControls.propTypes = {
  cbChangedFilter: PropTypes.func.isRequired,
  cbChangedSort: PropTypes.func.isRequired,
  cbChangeOutputType: PropTypes.func.isRequired,
};

export default WineControls;
