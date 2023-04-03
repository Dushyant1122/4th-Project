import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from react!!!!</h1>
//       <h1>Hello from react!!!!</h1>
//       <Person/>
//     </div>
//   );
// }
const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Ram", age: 28 },
      { name: "Shyam", age: 24 },
      { name: "Sita", age: 26 },
    ],
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Rajni", age: 24 },
        { name: "Sunita", age: 26 },
      ],
    });
  };
  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "raghav", age: 28 },
        { name: event.target.value, age: 24 },
        { name: "Sunita", age: 26 },
      ],
    });
  };
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };
  return (
    <div className="App">
      <h1> Hello, React App</h1>
      <p> This is Working!!</p>
      <button style= {style} onClick={switchNameHandler.bind(this,'Raghav')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'RadheShyam')}
        changed = {nameChangeHandler}
      >
        My Hobbies: Coding
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
