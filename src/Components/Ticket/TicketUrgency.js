import * as React from "react";

export default class TicketUrgency extends React.Component{

    render(){

        let urgency = {
            1 : {name: 'Critical'},
            2 : {name: 'High'},
            3 : {name: 'Average'},
            4 : {name: 'Low'}
        };

        let urgencyName = urgency[this.props.urgencyId].name;

        return (
            <a>{urgencyName}</a>
        )
    }
}