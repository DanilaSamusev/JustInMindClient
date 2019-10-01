import * as React from "react";
import '../../styles/ticketCreation/fieldNames.css'

export default class FieldNames extends React.Component {



    render() {
        return (
            <div className='fieldNames'>

                <div>
                    Category*
                </div>

                <div>
                    Name*
                </div>

                <div>
                    Description
                </div>

                <label/>

                <div>
                    Urgency*
                </div>

                <div>
                    Desired resolution date
                </div>

                <div>
                    Add attachments
                </div>

                <div>
                    Comment
                </div>

            </div>
        )
    }

}