import React from 'react';
import TicketTable from "./Components/TicketTable";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <button className="newTicketButton"/>
      <button className="allTicketsButton"/>
      <button className="myTicketsButton"/>
      <TicketTable/>
    </div>
  );
}
