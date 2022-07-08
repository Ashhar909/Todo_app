import { Component } from "react";
import AddT from "./AddForm";
// import AddTodo from "./AddTodo";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos : [
      {id:1, content: "Buy some Milk"},
      {id:2, content: "Play mario kart"}
    ]
  }
  deleteTodo = (id) => {
    const newTodo = this.state.todos.filter(todo =>{
      return todo.id !== id
    })

    this.setState({
      todos: newTodo
    })
  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let todosNew = [...this.state.todos,todo]
    this.setState({
      todos: todosNew
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        {/* <AddTodo/> */}
        <AddT addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
