import { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import TodoList from "../TodoList/TodoList";
import "./TodoApp.css";

const TodoApp = () => {
    const[todos, setTodos] = useState([]);
    const[filteredTodos, setFilteredTodos] = useState([]);
    const[status, setStatus] = useState("All");
    const[openAddForm, setOpenAddForm] = useState(false);

    useEffect(() => {
        filterTodos(status)
    },[todos, status])

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

    const selectHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
        filterTodos(e.target.value)
    }
    const openNewTaskBtn = () => {
        setOpenAddForm(true);
    }

    return(
        <section className="TodoApp">
            <div className="container">
            <NavBar 
               allTodos={todos.length} 
               unCompletedTodos={todos.filter((t) => !t.isCompleted).length} 
               CompletedTodos={todos.filter((t) => t.isCompleted).length} 
               status={status}
               changeHandler={selectHandler}
            />
            <TodoList 
              todos={filteredTodos} 
              onComplete={completeTodo} 
              onDelete={removeTodo} 
              onUpdateTodo={updateTodo}
              addTodo={addTodo}
              openAddForm={openAddForm}
              setOpenAddForm={setOpenAddForm}
              openNewTaskBtn = {openNewTaskBtn}
            />
            
            {/* <TodoForm submitTodo={addTodo}/> */}
        </div>
        </section>
    )
}
export default TodoApp;