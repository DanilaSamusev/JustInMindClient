import React from "react";
import {Constants} from "../../Constants";

export default class TicketState extends React.Component {

    render() {

        let stateName = Constants.STATES[this.props.stateId];

        return (
            <a>{stateName}</a>
        )
    }
}