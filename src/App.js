import React from 'react';
import TicketTable from "./Components/TicketTable";
import './App.css';

export default function App() {
  return (
    <div className="App">
        <button className="newTicketButton">Create New Ticket</button>
      <button className="allTicketsButton">All Tickets</button>
      <button className="myTicketsButton">My Tickets</button>
        <input></input>
      <TicketTable/>
    </div>
  );
}
