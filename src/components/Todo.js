const Todo = ({ todo, onComplete, onDelete }) => {
    return(
        <div className="todo">
          <div onClick={onComplete} className={todo.isCompleted ? "completed" : "" }>{todo.text}</div>
          <div>
             <button>Edit</button>
             <button onClick={onDelete}>delete</button>
          </div>
        </div>
    )
}
 
export default Todo;