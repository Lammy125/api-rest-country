import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Input from "./Input";
import Country from "./Country";
import { useSelector } from "react-redux";

const Container = () => {
  const { darkMode } = useSelector((state) => state.darkModeReducer);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className={darkMode ? "AppDarkMode" : "App"}>
      <Header />
      <div className="regionCountry">
        <Search setSearchQuery={setSearchQuery} />
        <Input setSelectedRegion={setSelectedRegion} />
      </div>
      <Country searchQuery={searchQuery} selectedRegion={selectedRegion} />
    </div>
  );
};

export default Container;
