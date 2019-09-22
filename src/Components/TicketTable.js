import React from 'react';
import '../styles/ticketsTable.css'
import TicketState from '../Components/TicketState'
import TicketUrgency from "./TicketUrgency";

export default class TicketTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            tickets: null,
        };
    }

    componentDidMount() {

        this.configureTicketState();
    }

    async configureTicketState() {

        let url = 'http://localhost:5000/api/ticket/allTickets';

        fetch(url,
            {
                method: 'get',
                headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
            })
            .then(response => response.json())
            .then(tickets =>
                this.setState(() => {
                    console.log(tickets);
                    return {
                        tickets: tickets,
                    };
                }));
    }

    render() {

        if (this.state.tickets == null) {
            return (
                <div>No Data</div>
            )
        }

        return (
            <div className='ticketsTable'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Desired Date</th>
                        <th>Urgency</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>

                    {
                        this.state.tickets.map(ticket =>
                            <tr>
                                <td>{ticket.id}</td>
                                <td>{ticket.name}</td>
                                <td>{ticket.desiredResolutionDate}</td>
                                <td>
                                    <TicketUrgency urgencyId={ticket.urgencyId}/>
                                </td>
                                <td>
                                    <TicketState stateId={ticket.stateId}/>
                                </td>
                                <td>
                                    <button className='actionButton'>Action</button>
                                </td>
                            </tr>
                        )}
                </table>
            </div>
        )
    }
}