import * as React from "react";
import TicketUrgency from "../Ticket/TicketUrgency";
import TicketState from "../Ticket/TicketState";

//TODO tabs, owner name...
export default class TicketOverviewData extends React.Component{

    render() {

        let ticket = this.props.ticket;

        return(
            <div className='ticketOverviewData'>
                <div>Created on - {new Date(ticket.createdOn).toLocaleDateString('en-US')}</div>
                <div>
                    Status - <TicketState stateId={ticket.stateId}/>
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
        )
    }
}