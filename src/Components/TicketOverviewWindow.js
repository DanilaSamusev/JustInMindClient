import * as React from "react";
import ToTicketListButton from "./ToTicketListButton";
import TicketOverviewData from "./TicketOverview/TicketOverviewData";

export default class TicketOverviewWindow extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

            ticket: null,
        };
    }

    componentDidMount() {

        let url = 'http://localhost:5000/api/ticket/ticket?ticketId=' + this.props.match.params.ticketId;

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

                <button>Edit</button>
                <button>Leave Feedback</button>

                <TicketOverviewData ticket={ticket}/>

                <button>History</button>
                <button>Comments</button>
            </div>

        )
    }
}