import * as React from "react";
import {Constants} from "../../Constants";

export default class TicketUrgency extends React.Component{

    render(){

        let urgencyName = Constants.URGENCY[this.props.urgencyId - 1];

        return (
            <a>{urgencyName}</a>
        )
    }
}