import * as React from "react";

export default class TicketUrgency extends React.Component{

    render(){

        let urgency = {
            1 : {name: 'Low'},
            2 : {name: 'Average'},
            3 : {name: 'High'},
            4 : {name: 'Critical'}
        };

        let urgencyName = urgency[this.props.urgencyId].name;

        return (
            <a>{urgencyName}</a>
        )
    }
}