const Todo = ({ todo, onComplete }) => {
    return(
        <div className="todo">
          <div className={todo.isCompleted ? "completed" : "" }>{todo.text}</div>
          <div>
             <button>Edit</button>
             <button onClick={onComplete}>complete</button>
          </div>
        </div>
    )
}
 
export default Todo;