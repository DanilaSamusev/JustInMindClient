import * as React from "react";
import FieldNames from "./FieldNames";
import '../../styles/ticketCreation/ticketCreationForm.css'

export default class TicketCreationForm extends React.Component {

    render() {
        return (
            <div className='ticketCreationForm'>

                <FieldNames/>


                    <form
                        className='form'
                        onSubmit={() => this.fetchTicket()}
                    >
                        <input/>
                        <input/>
                        <input/>
                        <textarea/>
                        <input/>
                        <input/>
                        <button>Browse</button>
                        <textarea/>
                        <button>Save as Draft</button>
                        <button type='submit'>Submit</button>
                    </form>

            </div>
        )
    }
}