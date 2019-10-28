import * as React from "react";
import ToTicketListButton from "./ToTicketListButton";

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
            .then(ticket =>
                this.setState(() => {
                    return {
                        ticket: ticket,
                    };
                }));
    }

    render(){
        return(
            <div>
                <ToTicketListButton/>

            </div>

        )
    }
}