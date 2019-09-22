import React from "react";

export default class TicketState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stateId: this.props.stateId,
        };
    }

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

        let stateName = states[this.state.stateId].name;

        return (
            <div>{stateName}</div>
        )
    }
}