import './App.css';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoApp/>
    </div>
  );
}

export default App;

// TodoApp: todos
// TodoForm => input + buttom = add todo
// TodoList => todos.map(...) => 

