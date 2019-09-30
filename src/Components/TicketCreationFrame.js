import * as React from "react";
import '../styles/ticketCreation/ticketCreationFrame.css'
import TicketCreationBody from '../Components/TicketCreation/TicketCreationBody'

export class TicketCreationFrame extends React.Component {

    render() {
        return (
            <div className='ticketCreationFrame'>

                <div className='ticketListButton'>
                    <button>Ticket List</button>
                </div>

                <TicketCreationBody/>

            </div>
        )
    }
}
