const Todo = ({ todo }) => {
    return(
        <div key={todo.id}>
          <div>{todo.text}</div>
          <div>
             <button>Edit</button>
             <button>complete</button>
          </div>
        </div>
    )
}
 
export default Todo;