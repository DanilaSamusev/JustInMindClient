import * as React from "react";
import AllTicketsFrame from "./AllTicketsFrame";
import {BrowserRouter, Route} from "react-router-dom";
import {TicketCreationFrame} from "./TicketCreationFrame";
import '../styles/mainFrame.css'

export default class MainFrame extends React.Component {

    render() {
        return (
            <div className='mainFrame'>
                <BrowserRouter>

                    <div>
                        <Route exact path='/' component={AllTicketsFrame}/>
                        <Route exact path='/1' component={TicketCreationFrame}/>
                    </div>

                </BrowserRouter>
            </div>
        )
    }
}