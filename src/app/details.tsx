import { link } from "fs";
import * as React from "react";
import './main.css';

export default function Detail({teamInfo}:{teamInfo: {teamName: string, teamNumber: string, country: string, state: string, city: string, contactInfo: string, awards: string}}){

    return(
        <>
        
        <div>
            <h2>Team Name</h2>
            <h2>Team Number</h2>
        </div>
        <div>
            <h3>Country</h3>
            <h3>State</h3>
            <h3>City</h3>
        </div>
        <div>
            <h3>Contact Info</h3>
            <h3>Awards</h3>
            <p>A message about contacting us if something is not right or you want to add more info.</p>
        </div>
        </>
    )
}

