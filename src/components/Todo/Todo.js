import "./Todo.css";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
    return(
            <div className="todo">
             <div
              onClick={onComplete} 
              className={`todoText ${todo.isCompleted ? "completed" : "" }`}
              >
                {todo.text}
             </div>
             <div>
                <button className="editBtn" onClick={onEdit}><BiEdit/></button>
                <button className="removeBtn" onClick={onDelete}><BiTrash/></button>
             </div>
           </div>
    )
}
 
export default Todo;