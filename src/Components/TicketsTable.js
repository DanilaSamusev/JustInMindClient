import React from 'react';
import ActionWithTicket from "./ActionWithTicket";
import {Link} from "react-router-dom";
import '../styles/ticketsTable.css'
import {Constants} from "../Constants";

export default class TicketsTable extends React.Component {

    render() {

        let tickets = this.props.tickets;

        if (tickets == null) {
            return (
                null
            )
        }

        return (
            <div className='ticketsTable'>
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Desired Date</th>
                        <th>Urgency</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                    {
                        tickets.map(ticket =>
                            <tr key={ticket.id}>
                                <td>{ticket.id}</td>
                                <td>
                                    <Link to={'/ticketOverview/' + ticket.id}>
                                        {ticket.name}
                                    </Link>
                                </td>
                                <td>
                                    {
                                        new Date(ticket.desiredResolutionDate).toLocaleDateString('en-US')
                                    }
                                </td>
                                <td>
                                    {Constants.URGENCY[ticket.urgencyId - 1]}
                                </td>
                                <td>
                                    {Constants.STATES[ticket.stateId - 1]}
                                </td>
                                <td>
                                    <ActionWithTicket ticket={ticket} changeTicketState={this.props.changeTicketState}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}