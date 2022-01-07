import "./Todo.css";

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
             <button className="editBtn" onClick={onEdit}>Edit</button>
             <button className="removeBtn" onClick={onDelete}>delete</button>
          </div>
        </div>
    )
}
 
export default Todo;