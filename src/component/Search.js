import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";

function Search({ setSearchQuery }) {
  const { darkMode } = useSelector((state) => state.darkModeReducer);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className={darkMode ? "searchInputDarkMode" : "searchInput"}>
      <BiSearchAlt2 size={16} className="searchIcon" />
      <input 
        type="text" 
        placeholder="Search for a country..." 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default Search;
