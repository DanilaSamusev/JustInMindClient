import * as React from "react";
import {Link} from "react-router-dom";
import TicketTable from "./Ticket/TicketTable";

export default class AllTicketsWindow extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

            tickets: null,
        };
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
    }

    render() {

        return(
            <div className='allTicketFrame'>

                <div className='createNewTicket'>
                        <Link to={'/ticketCreation'}>
                            <button className='createNewTicketButton'>Create New Ticket</button>
                        </Link>
                </div>

                <div className='ticketSwitchPanel'>
                    <button >All Tickets</button>
                    <button onClick={() => null}>My Tickets</button>
                </div>

                <input className='searchingInput'/>

                <TicketTable tickets={this.state.tickets}/>
            </div>
        )
    }
}