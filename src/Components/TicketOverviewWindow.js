import * as React from "react";
import ToTicketListButton from "./ToTicketListButton";
import TicketOverviewData from "./TicketOverview/TicketOverviewData";
import {Link} from "react-router-dom";

export default class TicketOverviewWindow extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

            ticket: null,
        };
    }

    componentDidMount() {

        let url = 'http://localhost:5000/api/ticket/ticketOverview?ticketId=' + this.props.match.params.ticketId;

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
            .then(data =>
                this.setState(() => {
                    return {
                        ticket: data[0],
                    };
                }));
    }

    render(){

        let ticket = this.state.ticket;

        if (ticket == null){
            return null;
        }

        return(
            <div>
                <ToTicketListButton/>

                Ticket ({ticket.stateId}) - {ticket.name}

                <Link to={'/ticketUpdate/' + ticket.id}>
                    <button>Edit</button>
                </Link>

                <button>Leave Feedback</button>

                <TicketOverviewData ticket={ticket}/>

                <button>History</button>
                <button>Comments</button>
            </div>

        )
    }
}