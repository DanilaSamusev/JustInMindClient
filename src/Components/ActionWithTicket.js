import React from 'react';
import {Constants} from "../Constants";

export default class ActionWithTicket extends React.Component {

    ticketHasState(stateName){
        return Constants.TICKET_STATES[this.props.ticketState].name === stateName
    }

    getEngineerButtons(){

        if (this.ticketHasState('Approved')){

            return (
                <div>
                    <button>Assign To Me</button>
                    <button>Cancel</button>
                </div>
            )
        }

        if (this.ticketHasState('In Progress')){
            return (
                <div>
                    <button>Done</button>
                </div>
            )
        }
    }

    getManagerButtons(){

        if (this.ticketHasState('Draft') || this.ticketHasState('Declined')){

            return (
                <div>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            )
        }

        if (this.ticketHasState('New')){

            return (
                <div>
                    <button>Approve</button>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            )
        }
    }

    getEmployeeButtons(){

        if (this.ticketHasState('Draft') || this.ticketHasState('Declined')){

            return (
                <div>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            )
        }
    }

    render() {

        return (
            this.getEngineerButtons()
        )
    }
}