import React from "react"

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span>
                    {todo.content}
                    <button className="right" onClick={() => {deleteTodo(todo.id)}}><i class="material-icons tiny waves-effect waves-light">done</i></button>                    
                    </span>
                </div>
            )
        })
    ):(
        <p className="center">You have no todo's left, yaay!!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;

