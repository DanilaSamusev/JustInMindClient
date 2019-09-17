import React from 'react';
import {TicketFetcher} from '../Services/TicketFetcher'


let ticketFetcher = new TicketFetcher();

export default class TicketTable extends React.Component{

    constructor(props) {
        super(props);

        this.state = {

            tickets: null,
        };
    }

    componentDidMount() {

        let tickets;
        let url = 'http://localhost:5000/api/ticket/allTickets';

        tickets = ticketFetcher.fetchTicket(url);

        this.setState(
            () => {
                return {
                    tickets: tickets,
                };
            });
    }

    render() {

        return(
            null
        )
    }
}