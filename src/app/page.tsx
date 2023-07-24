import React from "react";
import Search from "./search";
import Detail from "./details";
import Map from "./map";
import { useState } from "react";


export default function MyAppComponent() {

  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("");
  const [teamNumber, setTeamNumber] = useState("");
  const [teamName, setTeamName] = useState("");

function updateSearchValue (value: string, type:string, countryCode:string, stateCode:string ) {
  setSearchType(type);
  setSearchValue(value);
  
  if (type === "team") {
    setTeamNumber(value);
    setTeamName("");
  }
  if (type === "name"){
    setTeamName(value);
    setTeamNumber(""); 
  }

  if 

}

function updateMapChoice(teamNumber:string){

}


  return (
    <div>
      <h1>Title</h1>
      <Search
        updateSearchValue={updateSearchValue}
        searchValue={searchValue}
        //searchType={this.state.searchType}
      >
      </Search>
      <Map></Map>
      <Detail
        teamName={teamName}
        teamNunmber={teamNumber}
      ></Detail>
    </div>
  );

}