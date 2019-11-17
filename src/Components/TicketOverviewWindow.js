import * as React from "react";
import ToTicketListButton from "./ToTicketListButton";
import {Constants} from "../Constants";
import {Link} from "react-router-dom";
import "../styles/styles.css"
import TicketHistory from "./TicketHistory";
import TicketComments from "./TicketComments";

export default class TicketOverviewWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            historyButtonClassName: ' focusedButton',
            commentsButtonClassName: '',
            ticketData: null,
            ticket: null,
        };
    }

    componentDidMount() {

        this.fetchTicket();
        this.fetchTicketData();
    }

    fetchTicket() {

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
    };

    fetchTicketData() {

        alert();

        if (this.state.historyButtonClassName === ' focusedButton') {

            let url = 'http://localhost:5000/api/ticket/ticketHistory?ticketId=' + this.props.match.params.ticketId;
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
                .then(data => {
                    this.setState(() => {
                        console.log(data);
                        return {
                            ticketData: data,
                        };
                    });
                })

        } else {

            if (this.state.historyButtonClassName === ' focusedButton') {

                let url = 'http://localhost:5000/api/ticket/ticketComments?ticketId=' + this.props.match.params.ticketId;
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
                    .then(data => {
                        this.setState(() => {
                            console.log(data);
                            return {
                                ticketData: data,
                            };
                        });
                    })
            }
        }
    };

    changeTicketData(historyButtonClassName, commentsButtonClassName) {

        this.setState(() => {
            return {
                historyButtonClassName: historyButtonClassName,
                commentsButtonClassName: commentsButtonClassName,
            };
        });

        this.fetchTicketData();
    }

    render() {

        let ticket = this.state.ticket;
        let ticketData = this.state.ticketData;
        let ticketDataComponent;
        let button = null;

        if (ticket === null || ticketData === null) {
            return null;
        }

        if (this.state.historyButtonClassName === ' focusedButton') {
            ticketDataComponent = <TicketHistory ticketData={ticketData}/>
        } else {
            ticketDataComponent = <TicketComments ticketData={ticketData}/>
        }

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
                        Status - {Constants.STATES[ticket.stateId - 1]}
                    </div>
                    <div>
                        Urgency - {Constants.URGENCY[ticket.urgencyId - 1]}
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

                <button className={this.state.historyButtonClassName}
                        onClick={() => this.changeTicketData('focusedButton', '')}>
                    History
                </button>
                <button className={this.state.commentsButtonClassName}
                        onClick={() => this.changeTicketData('', 'focusedButton')}>
                    Comments
                </button>

                {ticketDataComponent}

            </div>

        )
    }
}