import { Component } from "react";

class AddT extends Component{
    state = {
        content:""
    }

    handlechange = (e) => {
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();                         // prevent reload of form
        this.props.addTodo(this.state)

        // Method 1 to clear form
        // var form = document.getElementById("myForm")
        // form.reset();

        // Method two to clear field
        e.target.reset();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} id="myForm">
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handlechange}/>
                </form>
            </div>
        )
    }
}

export default AddT;