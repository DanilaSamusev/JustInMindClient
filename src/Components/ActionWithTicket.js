import React from 'react';
import {Constants} from "../Constants";

export default class ActionWithTicket extends React.Component {

    changeTicketState(stateId) {

        let ticket = this.props.ticket;
        ticket.stateId = stateId;
        this.props.changeTicketState();
    }

    render() {

        let ticket = this.props.ticket;
        let ticketStateName = Constants.STATES[ticket.stateId];
        let userRole = localStorage.getItem("userRole");
        let actions = Constants.USER_ACTIONS[userRole][ticketStateName].actions;

        return (
            <div>
                {actions.map(
                    action =>
                        <button onClick={() => this.changeTicketState(action.stateId)}>
                            {action.name}
                        </button>)
                }
            </div>
        )
    }
}