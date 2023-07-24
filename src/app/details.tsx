import * as React from "react";

export default function Detail({teamInfo}:{teamInfo: {teamName: string, teamNumber: string, country: string, state: string, city: string, contactInfo: string, awards: string}}){

    return(
        <>
        <div>
            <h1>Team Name</h1>
            <h3>Team Number</h3>
        </div>
        <div>
            <h5>Country</h5>
            <h5>State</h5>
            <h5>City</h5>
        </div>
        <div>
            <h5>Contact Info</h5>
            <h5>Awards</h5>
            <h5>A message about contacting us if something is not right or you want to add more info.</h5>
        </div>
        </>
    )
}

