import { useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const[todos, setTodos] = useState([]);
    const[filteredTodos, setFilteredTodos] = useState([]);

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

    const updateTodo = (id,newValue) => {
        console.log(id)
        const index = todos.findIndex((todo) => todo.id === id);
        const selectedTodo = { ...todos[index] };
        selectedTodo.text = newValue;
        const updatedTodos = [...todos];
        updatedTodos [index] = selectedTodo;
        setTodos(updatedTodos);
    }

    const filterTodos = (status) => {
        switch(status){
            // case "All":
            //     setFilteredTodos(todos)
            //     break;
            case "completed":
                setFilteredTodos(todos.filter((t) => t.isCompleted))   
                break;
            case "unCompleted":
                setFilteredTodos(todos.filter((t) => !t.isCompleted))     
                break;
            default:
                setFilteredTodos(todos)    
        }
    }

    return(
        <div className="container">
            <NavBar 
            unCompletedTodos={todos.filter((t) => !t.isCompleted).length} 
            filterTodos={filterTodos}
            />
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