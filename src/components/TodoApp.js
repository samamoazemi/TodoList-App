import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const[todos, setTodos] = useState([]);

    const addTodoHandler = (input) => {
        const newTodo = { 
             id : Math.floor(Math.random()*1000),
             text: input,
             isCompleted: false,
        }
        setTodos([...todos, newTodo])
    }
    const completeTodo = (id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        // clone : do not mutate
        const selectedTodo = { ...todos[index] };
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        const updatedTodos = [...todos];
        updatedTodos [index] = selectedTodo;
        setTodos(updatedTodos);

    }

    return(
        <div className="container">
        <TodoForm addTodoHandler={addTodoHandler}/>
        <TodoList todos={todos} onComplete={completeTodo}/>
        </div>
    )
}
export default TodoApp;