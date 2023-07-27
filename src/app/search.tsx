
import { InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function Search({updateSearchValue, updateSearchType}: {updateSearchValue: Function, updateSearchType: Function}) {

    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("");

    function updateSelectionSearchType(value: { target: { value: any; }; }){
        setSearchType(value.target.value);
        let searchTypeList = ["name","country","state","team"]
        //make all the unselected dropdowns disappear
        for (let i = 0; i < searchTypeList.length; i++) {
            if (searchTypeList[i] != value.target.value){
                document.getElementById(searchTypeList[i]).style.display = "none";
            }
        }
        //show the selected dropdown and the search button
        document.getElementById(value.target.value).style.display = "inline";
        document.getElementById("searchButton").style.display = "inline";
    }

    return(
        <>
            <InputLabel id="search-type-label">Search By:</InputLabel>
        <Select
            labelId="search-type-label"
            id="search-type"
            value={searchType}
            label="Search By:"
            onChange={updateSelectionSearchType}
        >
            <MenuItem value={"team"}>Team Number</MenuItem>
            <MenuItem value={"name"}>Team Name</MenuItem>
            <MenuItem value={"country"}>Country</MenuItem>
            <MenuItem value={"state"}>State</MenuItem>
        </Select>
        <br></br>
        <select name="team" id="team" className="hidden">
            <option value=""></option>
            <option value="11111">11111</option>
            <option value="22222">22222</option>
            <option value="33333">33333</option>
            <option value="44444">44444</option>
        </select>
        <select name="name" id="name" className="hidden">
            <option value=""></option>
            <option value="Name 1">Name 1</option>
            <option value="Name 2">Name 2</option>
            <option value="Name 3">Name 3</option>
            <option value="Name 4">Name 4</option>
        </select>
        <select name="country" id="country" className="hidden">
            <option value=""></option>
            <option value="US">US</option>
            <option value="Mexico">Mexico</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
        </select>
        <select name="state" id="state" className="hidden">
            <option value=""></option>
            <option value="Utah">Utah</option>
            <option value="California">California</option>
            <option value="New Mexico">New Mexico</option>
            <option value="Arizona">Arizona</option>
        </select>
        <button id="searchButton" className="hidden">Search</button>

        </>
    )
}

