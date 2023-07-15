import React from "react";
import Search from "./search";


export default class MyApp extends React.Component<any, any>{

updateSearchValue = (value: string, type:string) => {
  this.setState({ searchValue: value, searchType: type });
  if (type === "team") {
    this.setState({ teamNumber: value 
    , teamName:null});
  }
  if (type === "name"){
    this.setState({ teamName: value, teamNumber: null });
     
  }
  
}
render() {

  return (
    <div>
      <h1>Title</h1>
      <Search
        updateSearchValue={this.updateSearchValue}
        searchValue={this.state.searchValue}
        //searchType={this.state.searchType}
      >
      </Search>
      <Map></Map>
      <Detail
        teamName={this.state.teamName}
        teamNunmber={this.state.teamNumber}
      ></Detail>
    </div>
  );
}
}