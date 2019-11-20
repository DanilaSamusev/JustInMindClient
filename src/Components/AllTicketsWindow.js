import * as React from "react";
import {Link} from "react-router-dom";
import {Constants} from "../Constants";
import {ActionWithTicket} from "./ActionWithTicket";
import "../styles/styles.css"

export class AllTicketsWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            allTicketsButtonClassName: ' focusedButton',
            myTicketsButtonClassName: '',
            tickets: null,
        };

        this.changeTicketState = this.changeTicketState.bind(this);
    }

    changeTicketState() {
        let tickets = this.state.tickets;
        this.setState(() => {
            return {
                tickets: tickets,
            };
        });
    }

    componentDidMount() {
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
                    return {
                        tickets: tickets,
                    };
                }));

        localStorage.setItem('userId', '1');
        localStorage.setItem('userRole', 'Manager')
    }

    changeButtonFocus(allTicketsButtonClassName, myTicketsButtonClassName) {

        this.setState(() => {
            return {
                allTicketsButtonClassName: allTicketsButtonClassName,
                myTicketsButtonClassName: myTicketsButtonClassName,
            };
        });
    }

    selectTicketsByOwnerId(tickets, id) {

        if (tickets === null) {
            return tickets;
        }

        let selectedTickets = [];

        for (let i = 0; i < tickets.length; i++) {

            if (tickets[i].ownerId == id) {
                selectedTickets.push(tickets[i])
            }
        }

        return selectedTickets;
    }

    render() {

        let tickets;

        if (this.state.myTicketsButtonClassName === 'focusedButton') {
            tickets = this.selectTicketsByOwnerId(this.state.tickets, localStorage.getItem('userId'));
        } else {
            tickets = this.state.tickets;
        }

        if (tickets === null){
            return null;
        }

        return (
            <div className='allTicketFrame'>

                <div className='createNewTicket'>
                    <Link to={'/ticketCreation'}>
                        <button className='createNewTicketButton'>Create New Ticket</button>
                    </Link>
                </div>

                <div className='ticketSwitchPanel'>
                    <button
                        className={this.state.allTicketsButtonClassName}
                        onClick={() => this.changeButtonFocus('focusedButton', '')}>
                        All Tickets
                    </button>
                    <button
                        className={this.state.myTicketsButtonClassName}
                        onClick={() => this.changeButtonFocus('', 'focusedButton')}>
                        My Tickets
                    </button>
                </div>

                <input className='searchingInput'/>

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
                                        <ActionWithTicket ticket={ticket} changeTicketState={this.changeTicketState}/>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}