import * as React from "react";
import {AllTicketsWindow} from "./AllTicketsWindow";
import {BrowserRouter, Route} from "react-router-dom";
import {TicketCreationWindow} from "./TicketCreationWindow";
import {TicketOverviewWindow} from "./TicketOverviewWindow";
import {TicketUpdateWindow} from "./TicketUpdateWindow";
import '../styles/mainFrame.css'

export default class MainWindow extends React.Component {

    render() {
        return (
            <div className='mainFrame'>
                <BrowserRouter>
                    <Route exact path='/' component={AllTicketsWindow}/>
                    <Route exact path='/ticketCreation' component={TicketCreationWindow}/>
                    <Route exact path='/ticketUpdate/:ticketId' component={TicketUpdateWindow}/>
                    <Route exact path='/ticketOverview/:ticketId' component={TicketOverviewWindow}/>
                </BrowserRouter>
            </div>
        )
    }
}