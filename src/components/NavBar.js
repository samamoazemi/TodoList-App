import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'completed', label: 'completed' },
  { value: 'unCompleted', label: 'unCompleted' },
];

const NavBar = ({unCompletedTodos, onChange, selectedOption}) => {

    if(!unCompletedTodos) return   <h2>set your today todos !</h2>;

    return(
      <header>
        <span>{unCompletedTodos}</span> <h2>todos are not completed </h2>
        <Select 
        onChange={onChange} 
        value={selectedOption} 
        options={options}
        className="select"
        />
      </header>
    )
}
 
export default NavBar;