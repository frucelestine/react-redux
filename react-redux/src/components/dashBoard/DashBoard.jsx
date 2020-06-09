import React, { Component } from "react"
import AddTask from "../tasks/AddTask"
import Tasks from "../tasks/Tasks"

class DashBoard extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h3>Dash Board</h3>
            <AddTask/>
            <Tasks/>
            </>
         );
    }
}
 
export default DashBoard;