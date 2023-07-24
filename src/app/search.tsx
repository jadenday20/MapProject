
import { InputLabel, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function Search(updateSearchValue: Function, updateSearchType: Function){

    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("");

    function updateSelectionSearchType(value: { target: { value: any; }; }){
        setSearchType(value.target.value);
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

        </>
    )
}

