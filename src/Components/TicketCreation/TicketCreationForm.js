import * as React from "react";
import FieldNames from "./FieldNames";
import '../../styles/ticketCreation/ticketCreationForm.css'

export default class TicketCreationForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            category: '',
            desiredResolutionDate: '',
            comment: '',
            urgency: 'Low',
        };

        this.fetchTicket = this.fetchTicket.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    fetchTicket() {

        let url = 'http://localhost:5000/api/ticket/ticket';
        let data = {
            name: this.state.name,
            description: this.state.description,
            createdOn: new Date(),
            desiredResolutionDate: this.state.desiredResolutionDate,
            state: 'New',
            category: this.state.category,
            urgency: this.state.urgency,
            comment: this.state.comment,
        };

        fetch(url, {
            method: 'Post',
            body: JSON.stringify(data),
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
        })
    }

    handleInputChange(event){

        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className='ticketCreationForm'>

                <FieldNames/>

                <div
                    className='form'
                >
                    <input name='category' onChange={this.handleInputChange}/>
                    <input name='name' onChange={this.handleInputChange}/>
                    <textarea name='description' onChange={this.handleInputChange}/>
                    <input name='urgency' onChange={this.handleInputChange}/>
                    <input name='desiredResolutionDate' onChange={this.handleInputChange}/>
                    <button>Browse</button>
                    <textarea name='comment' onChange={this.handleInputChange}/>
                    <button>Save as Draft</button>
                    <button onClick={this.fetchTicket}>Submit</button>
                </div>

            </div>
        )
    }
}