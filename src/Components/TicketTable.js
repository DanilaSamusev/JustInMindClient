import React from 'react';
import '../styles/ticketsTable.css'

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
            .then(tickets => this.setState(() => {
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
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                    {
                        this.state.tickets.map(ticket =>
                            <tr>
                                <td>{ticket.id}</td>
                                <td>{ticket.name}</td>
                                <td>{ticket.desired_Resolution_Date}</td>
                                <td>{ticket.urgency_Id}</td>
                                <td>{ticket.state_Id}</td>
                                <td>
                                    <button>Action</button>
                                </td>
                            </tr>
                        )}
                </table>
            </div>
        )
    }
}