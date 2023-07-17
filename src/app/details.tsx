import * as React from "react";
export default class Detail extends React.Component<any, any>{
    componentDidMount(): void {
        if(this.props.teamName != null){

        }
        else{

        }
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if(this.props.teamName != prevProps.teamName || this.props.teamNumber != prevProps.teamNumber){
            if(this.props.teamName != null){

            }
            else{
    
            }
        }
    }
    render(): React.ReactNode {
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
}
