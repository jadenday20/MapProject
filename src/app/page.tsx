'use client'

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

function updateSearchValue (value: string ) {

  setSearchValue(value);
  if (searchType === "team") {
    setTeamNumber(searchValue);
    setTeamName("");
  }
  if (searchType === "name"){
    setTeamName(searchValue);
    setTeamNumber(""); 
  }
}

function updateSearchType (type: string ) {

  setSearchType(type);
  if (searchType === "team") {
    setTeamNumber(searchValue);
    setTeamName("");
  }
  if (type === "name"){
    setTeamName(searchValue);
    setTeamNumber(""); 
  }

  
}

function updateMapChoice(teamNumber:string){

}


  return (
    <div>
      <h1>Title</h1>
      <Search

        updateSearchValue={updateSearchValue}
        updateSearchType={updateSearchValue}
      />

      <Map
        countryCode="countryCode"
        stateCode="stateCode"
        onClick={updateMapChoice}
     />
      <Detail
       teamInfo={{teamName: "teamName", teamNumber: "teamNumber", country: "country", state: "state", city: "city", contactInfo: "contactInfo", awards: "awards"}}
      ></Detail>
    </div>
  );

}