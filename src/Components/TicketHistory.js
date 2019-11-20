import * as React from "react";

export default class TicketHistory extends React.Component {

    render() {

        let ticketData = this.props.ticketData;

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Date</th>
                        <th>User</th>
                        <th>Action</th>
                        <th>Description</th>
                    </tr>
                    {
                        ticketData.map((data, key) => {
                            let dateTime = data.date.toString();
                            return (
                                <tr key={key}>
                                    <td>
                                        {
                                            new Date(dateTime).toLocaleDateString('en-US')
                                        }
                                    </td>
                                    <td>{data.userName}</td>
                                    <td>{data.action}</td>
                                    <td>{data.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}