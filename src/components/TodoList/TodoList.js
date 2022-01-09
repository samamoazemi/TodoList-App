import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoList.css";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo, addTodo, openAddForm, setOpenAddForm,openNewTaskBtn }) => {

    const [edit, setEdit] = useState({id:null, Text: "", isCompleted :false})

    const editTodo = (newValue) => {
        onUpdateTodo(edit.id,newValue)
        setEdit({ id: null, text:"" })
    }
    
    const renderTodos = () => {
        // if (todos.length === 0) return <p>add some todos</p>;
        if(openAddForm){
            return(<TodoForm submitTodo={addTodo} setOpenAddForm={setOpenAddForm}/>)
        }
        else if(todos.length == 0){
            return(
                <div className="addNewTask noTask">
                    <button onClick={openNewTaskBtn}>+ Add new item</button>
                </div>
            )
        }
        
        else{
            console.log(todos + "todos")
            console.log(todos.length + "todos")
            return(
                <div>
                    <div className="allTodos hasItem">
                        {
                            todos.map((todo) => {
                                return(
                                    <Todo 
                                    key={todo.id} 
                                    todo={todo} 
                                    onComplete={() => onComplete(todo.id)} 
                                    onDelete={() => onDelete(todo.id)}
                                    onEdit={() => setEdit(todo)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="addNewTask">
                        <button onClick={openNewTaskBtn}>+ Add new item</button>
                    </div>
                </div>
            )
        }
    }

    return (
         <div>
           {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} setOpenAddForm={setOpenAddForm}/> : renderTodos()}
         </div>
    )
}
 export default TodoList;