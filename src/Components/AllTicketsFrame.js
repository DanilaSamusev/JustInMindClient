import * as React from "react";
import TicketTable from "./TicketTable";
import '../styles/ticketFrame.css'

export default class TicketsFrame extends React.Component{

    render() {
        return(
            <div className='ticketFrame'>
                <div>
                    <button className="newTicketButton">Create New Ticket</button>
                </div>

                <div>
                    <button className="allTicketsButton">All Tickets</button>
                    <button className="myTicketsButton">My Tickets</button>
                </div>

                <input></input>

                <TicketTable/>
            </div>
        )
    }
}