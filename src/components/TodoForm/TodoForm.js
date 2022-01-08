import { useEffect, useRef, useState } from "react";
import "./TodoForm.css";

const TodoForm = (props) => {

    const[input, setInput] = useState(props.edit ? props.edit.text  : "" );
    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    },[]) 

    const changeHandler = (e) =>{
        console.log(e.target.value);
        setInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(!input){
            alert("enter todo !")
            return;
        }
        props.submitTodo(input);
        setInput("");
    }
    
    return(
         <form onSubmit={submitHandler}>
              <div className="formControl">
              <input 
               type="text" 
               value={input} 
               onChange={changeHandler}
               placeholder={props.edit ? "update value ..." : "add new todo ..."}
               ref={inputRef}
               />
               <button 
                 className={`btn ${ props.edit ? "updateTodo" : "addTodo"}`}
                 type="submit"
                >
                   {props.edit ? "edit" : "Add"}
                </button>
              </div>
        </form>
    )
}
 
export default TodoForm;