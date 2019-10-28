import * as React from "react";
import '../styles/ticketCreation/ticketCreationFrame.css'
import TicketCreationBody from '../Components/TicketCreation/TicketCreationBody'
import ToTicketListButton from "./ToTicketListButton";

export class TicketCreationFrame extends React.Component {

    render() {
        return (
            <div className='ticketCreationFrame'>

                <ToTicketListButton/>
                <TicketCreationBody/>

            </div>
        )
    }
}
