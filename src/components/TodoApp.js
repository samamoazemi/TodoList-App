import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const[todos, setTodos] = useState([]);

    const addTodo = (input) => {
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

    const removeTodo = (id) => {
        console.log(id)
        const filteredTodos = todos.filter((t) => t.id !== id)
        setTodos(filteredTodos)
    }

    const updateTodo = (id) => {
        console.log(id)
    }

    return(
        <div className="container">
        <TodoForm submitTodo={addTodo}/>
        <TodoList 
        todos={todos} 
        onComplete={completeTodo} 
        onDelete={removeTodo} 
        onUpdateTodo={updateTodo}
        />
        </div>
    )
}
export default TodoApp;