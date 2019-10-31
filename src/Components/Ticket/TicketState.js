import React from "react";
import {Constants} from "../../Constants";

export default class TicketState extends React.Component {

    render() {

        let stateName = Constants.TICKET_STATES[this.props.stateId].name;

        return (
            <a>{stateName}</a>
        )
    }
}