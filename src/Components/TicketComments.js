import * as React from "react";

export default class TicketComments extends React.Component {

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
                    </tr>
                    {
                        ticketData.map(data => {
                            let dateTime = data.date.toString();

                            return (
                                <tr key={data.id}>
                                    <td>
                                        {
                                            new Date(dateTime).toLocaleDateString('en-US')
                                        }
                                    </td>
                                    <td>{data.userName}</td>
                                    <td>{data.comment}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}