import * as React from "react";
import '../styles/ticketCreation/ticketCreationFrame.css'
import TicketCreationForm from "./TicketCreationForm";

export class TicketUpdateWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ticket: null,
        };
    }

    componentDidMount() {

        let url = 'http://localhost:5000/api/ticket/ticketUpdate?ticketId=' + this.props.match.params.ticketId;

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
                        ticket: data,
                    };
                }));
    }

    render() {

        let ticket = this.state.ticket;

        if (ticket === null){
            return null;
        }

        return (
            <div className='ticketCreationFrame'>
                <TicketCreationForm ticket={ticket} methodName={'Put'}/>
            </div>
        )
    }
}