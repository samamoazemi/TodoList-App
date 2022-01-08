import { useState } from 'react';
import "./Navbar.css";

const NavBar = ({allTodos ,CompletedTodos, unCompletedTodos, filterTodos}) => {

const[status, setStatus] = useState("All")

  const changeHandler = (e) => {
    setStatus(e.target.value)
    filterTodos(e.target.value)
}

    if(!allTodos) return   <h2>set your today todos !</h2>;

    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[date.getDay()]; 
    let month = months[date.getMonth()];
    let dateOfDay = date.getDate();

    return(
      <header className="navBar">
          <div className="date">
            {day}, {dateOfDay}, {month}
          </div>
          <div className="tallys">
            <div className="tally">
             <span>{allTodos}</span> <p>Total</p>
            </div>
            <div className="tally">
             <span>{unCompletedTodos}</span> <p>Remaining</p>
            </div>
            <div className="tally">
             <span>{CompletedTodos}</span> <p>Done</p>
            </div>
          </div>
          <select onChange={changeHandler} value={status} className="selectOption">
            <option value="ALL">ALL</option>
            <option value="completed">completed</option>
            <option value="unCompleted">unCompleted</option>
          </select>
      </header>
    )
}
 
export default NavBar;