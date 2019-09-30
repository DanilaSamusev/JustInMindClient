import * as React from "react";
import '../styles/ticketCreation/ticketCreationFrame.css'
import TicketCreationBody from '../Components/TicketCreation/TicketCreationBody'
import {Link} from "react-router-dom";

export class TicketCreationFrame extends React.Component {

    render() {
        return (
            <div className='ticketCreationFrame'>

                <div className='ticketListButton'>
                    <Link to={'/'}>
                        <button>Ticket List</button>
                    </Link>
                </div>

                <TicketCreationBody/>

            </div>
        )
    }
}
