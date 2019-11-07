import * as React from "react";
import {Constants} from '../../Constants'
import FieldNames from "./FieldNames";
import '../../styles/ticketCreation/ticketCreationForm.css'

export default class TicketCreationForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            categories: null,
            name: '',
            description: '',
            categoryId: 0,
            desiredResolutionDate: '',
            comment: '',
            stateId: '',
            urgencyId: 0,
        };

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

    fetchTicket(stateId) {

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
            method: 'Post',
            body: JSON.stringify(data),
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300){

                    return alert('Ticket has been added');
                }
                else{
                    return response.json().then((data) => alert(data));
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
                <div>Waiting for server response...</div>
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
                                    <option key={key} value={category.stateId}>{category.name}</option>
                                )
                            })
                        }
                    </select>
                    <input name='name' onChange={this.handleInputChange}/>
                    <textarea name='description' onChange={this.handleInputChange}/>
                    <select name='urgencyId' onChange={this.handleInputChange}>
                        {
                            Constants.URGENCY.map((urg, key) => {
                                return (
                                    <option key={key} value={key}>{urg}</option>
                                )
                            })
                        }
                    </select>
                    <input name='desiredResolutionDate' onChange={this.handleInputChange}/>
                    <button>Browse</button>
                    <textarea name='comment' onChange={this.handleInputChange}/>
                    <button onClick={() => this.fetchTicket('Draft')}>Save as Draft</button>
                    <button onClick={() => this.fetchTicket('New')}>Submit</button>
                </div>

            </div>
        )
    }
}