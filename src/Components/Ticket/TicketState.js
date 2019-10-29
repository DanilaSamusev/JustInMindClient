import React from "react";

export default class TicketState extends React.Component {

    render() {

        let states = {
            1 : {name: 'Draft'},
            2 : {name: 'New'},
            3 : {name: 'Approved'},
            4 : {name: 'Declined'},
            5 : {name: 'In Progress'},
            6 : {name: 'Done'},
            7 : {name: 'Canceled'}
        };

        let stateName = states[this.props.stateId].name;

        return (
            <a>{stateName}</a>
        )
    }
}