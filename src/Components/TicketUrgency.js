import * as React from "react";

export default class TicketUrgency extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            urgencyId : this.props.urgencyId,
        }
    }

    render(){

        let urgency = {
            1 : {name: 'Critical'},
            2 : {name: 'High'},
            3 : {name: 'Average'},
            4 : {name: 'Low'}
        };

        let urgencyName = urgency[this.state.urgencyId].name;

        return (
            <div>{urgencyName}</div>
        )
    }
}