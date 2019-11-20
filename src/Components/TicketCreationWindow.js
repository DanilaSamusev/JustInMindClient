import * as React from "react";
import '../styles/ticketCreation/ticketCreationFrame.css'
import {Link} from "react-router-dom";
import TicketCreationForm from "./TicketCreationForm";

export class TicketCreationWindow extends React.Component {


    render(){
        return(
            <div className='ticketListButton'>
                <Link to={'/'}>
                    <button>Ticket List</button>
                </Link>

                <div className='title'>
                    <h3>Create new Ticket</h3>
                </div>

                <TicketCreationForm ticket={null} methodName={'Post'}/>

            </div>
        )
    }
}
