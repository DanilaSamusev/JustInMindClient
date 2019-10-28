import * as React from "react";
import {Link} from "react-router-dom";

export default class ToTicketListButton extends React.Component{

    render(){
        return(
            <div className='ticketListButton'>
                <Link to={'/'}>
                    <button>Ticket List</button>
                </Link>
            </div>
        )
    }
}