import * as React from "react";
export default class search extends React.Component<any, any>{

updateValue = (value: { target: { value: any; }; }) => {
    // todo. Check team number and/or name
    // call api
    this.props.updateSearchValue(value.target.value, teamInputType)
}

render() {  
    return (<div>
        <label>
            Team Name:
             <input 
             name="teamInput" 
             value={this.props.searchValue}
             onChange={this.updateValue}
             />
        </label>
    </div>)
    }
}
