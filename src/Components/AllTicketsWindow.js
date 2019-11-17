import * as React from "react";
import {Link} from "react-router-dom";
import TicketsTable from "./TicketsTable";
import "../styles/styles.css"

export default class AllTicketsWindow extends React.Component {

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

    onClick(allTicketsButtonClassName, myTicketsButtonClassName) {

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

        let ticketsToDisplay;

        if (this.state.myTicketsButtonClassName === 'focusedButton') {
            ticketsToDisplay = this.selectTicketsByOwnerId(this.state.tickets, localStorage.getItem('userId'));
        } else {
            ticketsToDisplay = this.state.tickets;
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
                        onClick={() => this.onClick('focusedButton', '')}>
                        All Tickets
                    </button>
                    <button
                        className={this.state.myTicketsButtonClassName}
                        onClick={() => this.onClick('', 'focusedButton')}>
                        My Tickets
                    </button>
                </div>

                <input className='searchingInput'/>

                <TicketsTable tickets={ticketsToDisplay} changeTicketState={this.changeTicketState}/>
            </div>
        )
    }
}