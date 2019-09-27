import * as React from "react";
import '../../styles/ticketCreation/ticketCreationFrame.css'
import TicketCreationBody from '../TicketCreation/TicketCreationBody'

export class TicketCreationFrame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: '1',
            name: '1',
            description: '1',
            urgency: '1',
            desiredResolutionDate: '1',
            comment: '1',
            state: '1',
        }
    }

    fetchTicket() {

        let url = 'http://localhost:5000/api/ticket/ticket';
        let data = {
            name: '1',
        };

        fetch(url, {
            method: 'Put',
            body: JSON.stringify(data),
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
        })
    }

    onChange() {

    }

    render() {
        return (
            <div className='ticketCreationFrame'>

                <div className='ticketListButton'>
                    <button>Ticket List</button>
                </div>

                <TicketCreationBody/>

            </div>
        )
    }
}
