import * as React from "react";
import AllTicketsFrame from "./AllTicketsFrame";
import '../styles/mainFrame.css'

export default class MainFrame extends React.Component{

    render() {
        return(
            <div className='mainFrame'>
                <AllTicketsFrame/>
            </div>
        )
    }
}