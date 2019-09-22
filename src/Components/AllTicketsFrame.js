import * as React from "react";
import {Link} from "react-router-dom";
import TicketTable from "./Ticket/TicketTable";
import '../styles/allTicketsFrame.css'

export default class AllTicketsFrame extends React.Component{

    render() {
        return(
            <div className='allTicketFrame'>

                <div className='createNewTicket'>
                        <Link to={'/1'}>
                            <button className='createNewTicketButton'>Create New Ticket</button>
                        </Link>
                </div>

                <div className='ticketSwitchPanel'>
                    <button className='allTicketsButton'>All Tickets</button>
                    <button className='myTicketsButton'>My Tickets</button>
                </div>

                <input className='searchingInput'/>

                <TicketTable/>
            </div>
        )
    }
}