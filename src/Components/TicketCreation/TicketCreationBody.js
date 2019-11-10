import * as React from "react";
import '../../styles/ticketCreation/ticketCreationBody.css'
import TicketCreationForm from "./TicketCreationForm";

export default class TicketCreationBody extends React.Component{

    render() {
        return(
            <div className='ticketCreationBody'>

                <div className='title'>
                    <h3>Create new Ticket</h3>
                </div>

                <TicketCreationForm ticket={null} methodName={'Post'}/>

            </div>
        )
    }
}