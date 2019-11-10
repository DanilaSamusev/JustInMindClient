import * as React from "react";
import ToTicketListButton from "./ToTicketListButton";
import {Link} from "react-router-dom";
import TicketState from "./Ticket/TicketState";
import TicketUrgency from "./Ticket/TicketUrgency";
import {Constants} from "../Constants";

export default class TicketOverviewWindow extends React.Component {

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

    render() {

        let ticket = this.state.ticket;

        if (ticket == null) {
            return null;
        }

        let button = null;


        if (Constants.STATES[ticket.stateId - 1] === 'Draft') {

            button =
                <Link to={'/ticketUpdate/' + ticket.id}>
                    <button>Edit</button>
                </Link>
        }

        return (
            <div>
                <ToTicketListButton/>
                <h3>Ticket ({ticket.stateId}) - {ticket.name}</h3>
                {button}
                <button>Leave Feedback</button>

                <div className='ticketOverviewData'>
                    <div>Created on - {new Date(ticket.createdOn).toLocaleDateString('en-US')}</div>
                    <div>
                        Status - <TicketState stateId={ticket.stateId - 1}/>
                    </div>
                    <div>
                        Urgency - <TicketUrgency urgencyId={ticket.urgencyId}/>
                    </div>
                    <div>
                        Desired resolution date - {new Date(ticket.desiredResolutionDate).toLocaleDateString('en-US')}
                    </div>
                    <div>
                        Owner - {ticket.ownerName}
                    </div>
                    <div>
                        Approver - {ticket.approverName}
                    </div>
                    <div>
                        Assignee - {ticket.assigneeName}
                    </div>
                    <div>
                        Attachments - {ticket.attachments}
                    </div>
                    <div>
                        Description - {ticket.description}
                    </div>
                    <div>
                        Category - {ticket.category}
                    </div>
                </div>

                <button>History</button>
                <button>Comments</button>
            </div>

        )
    }
}