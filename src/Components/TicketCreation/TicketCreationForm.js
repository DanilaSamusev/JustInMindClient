import * as React from "react";
import {Constants} from '../../Constants'
import FieldNames from "./FieldNames";
import '../../styles/ticketCreation/ticketCreationForm.css'

export default class TicketCreationForm extends React.Component {

    constructor(props) {
        super(props);

        let ticket = this.props.ticket;

        if (this.props.ticket !== null) {
            this.state = {
                name: ticket.name,
                description: ticket.description,
                desiredResolutionDate: new Date(ticket.desiredResolutionDate).toLocaleDateString('en-US'),
                comment: ticket.comment,
                categories: null,
                categoryId: ticket.categoryId,
                stateId: 0,
                urgencyId: ticket.urgencyId,
            };
        } else {
            this.state = {
                name: '',
                description: '',
                desiredResolutionDate: '',
                comment: '',
                categories: null,
                categoryId: 0,
                stateId: 0,
                urgencyId: 0,
            };
        }

        this.fetchTicket = this.fetchTicket.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {

        this.getTicketCategories()
    }

    getTicketCategories() {

        let url = 'http://localhost:5000/api/category';

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
            .then(categories =>
                this.setState(() => {
                    return {
                        categories: categories,
                    };
                }));
    }

    fetchTicket(stateId, methodType) {

        let url = 'http://localhost:5000/api/ticket/ticket';
        let data = {
            name: this.state.name,
            description: this.state.description,
            createdOn: new Date(),
            desiredResolutionDate: this.state.desiredResolutionDate,
            stateId: stateId,
            categoryId: this.state.categoryId,
            urgencyId: this.state.urgencyId,
            comment: this.state.comment,
        };

        fetch(url, {
            method: methodType,
            body: JSON.stringify(data),
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {

                    return alert('Ticket has been added');
                } else {
                    return response.json().then((data) => console.log(data));
                }
            })
    }

    handleInputChange(event) {

        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value,
        })
    }

    render() {

        if (this.state.categories == null) {
            return (
                null
            )
        }

        return (
            <div className='ticketCreationForm'>

                <FieldNames/>

                <div
                    className='form'
                >
                    <select name='categoryId' onChange={this.handleInputChange}>
                        <option value={0}/>
                        {
                            this.state.categories.map((category, key) => {
                                return (
                                    <option key={key} value={category.id}
                                            selected={this.state.categoryId === key + 1}>{category.name}</option>
                                )
                            })
                        }
                    </select>
                    <input name='name' onChange={this.handleInputChange} value={this.state.name}/>
                    <textarea name='description' onChange={this.handleInputChange} value={this.state.description}/>
                    <select name='urgencyId' onChange={this.handleInputChange}>
                        <option/>
                        {
                            Constants.URGENCY.map((urgency, key) => {
                                return (
                                    <option key={key} value={key + 1}
                                            selected={this.state.urgencyId === key + 1}>{urgency}</option>
                                )
                            })
                        }
                    </select>
                    <input name='desiredResolutionDate' onChange={this.handleInputChange}
                           value={this.state.desiredResolutionDate}/>
                    <button>Browse</button>
                    <textarea name='comment' onChange={this.handleInputChange}/>
                    <button onClick={() => this.fetchTicket('Draft', this.props.methodName)}>Save as Draft</button>
                    <button onClick={() => this.fetchTicket('New', this.props.methodName)}>Submit</button>
                </div>

            </div>
        )
    }
}