import React from 'react';
import {Constants} from "../Constants";

export default class ActionWithTicket extends React.Component {

    changeTicketState(stateId) {

        console.log(stateId);
        let ticket = this.props.ticket;
        ticket.stateId = stateId;
        this.props.changeTicketState();
    }

    fetchTicketState(stateId) {

        let ticket = this.props.ticket;
        let url = 'http://localhost:5000/api/ticket/ticketState';
        let userId = parseInt(localStorage.getItem('userId'));
        let data = {
            stateId: stateId,
            ticketId: ticket.id,
            userId: userId,
        };

        console.log(stateId);

        fetch(url, {
            method: 'Put',
            body: JSON.stringify(data),
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
        })
    }

    render() {

        let ticket = this.props.ticket;
        let ticketStateName = Constants.STATES[ticket.stateId - 1];
        let userRole = localStorage.getItem("userRole");
        let actions = Constants.USER_ACTIONS[userRole][ticketStateName].actions;

        return (
            <div>
                {actions.map(
                    action =>
                        <button onClick={() => {
                            this.fetchTicketState(action.stateId);
                            this.changeTicketState(action.stateId);
                        }}>
                            {action.name}
                        </button>)
                }
            </div>
        )
    }
}