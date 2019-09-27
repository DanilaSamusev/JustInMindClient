import * as React from "react";

export default class FieldNames extends React.Component{

    render() {
        return(
            <div className='fieldNames'>

                <div>
                    Category
                </div>

                <div>
                    Name
                </div>

                <div>
                    Description
                </div>

                <div>
                    Urgency
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