import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

function SelectLabels({ setSelectedRegion }) {
  const [region, setRegion] = React.useState("");
  const { darkMode } = useSelector((state) => state.darkModeReducer);

  const handleChange = (event) => {
    const selectedRegion = event.target.value;
    setRegion(selectedRegion);
    setSelectedRegion(selectedRegion); // Update the selected region in the parent component
  };

  return (
    <div className={darkMode ? "inputElemDarkMode" : "inputElem"}>
      <FormControl sx={{ width: 200 }}>
        <InputLabel
          id={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
        >
          Filter by Region
        </InputLabel>
        <Select
          labelId={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
          id={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
          value={region}
          label="region"
          onChange={handleChange}
          variant="standard"
          disableUnderline
        >
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Americas"}>America</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLabels;
