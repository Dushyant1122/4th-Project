import React, {Component} from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:'d1j1', name: "Ram", age: 28 },
      { id:'d2j2', name: "Shyam", age: 24 },
      { id:'d3j3',name: "Sita", age: 26 },
    ],
    OtherState: "Some other value",
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})

    // this.setState({
    //   persons: [
    //     { name: "raghav", age: 28 },
    //     { name: event.target.value, age: 24 },
    //     { name: "Sunita", age: 26 },
    //   ],
    // });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
            click = {()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed= {(event)=>this.nameChangeHandler(event, person.id)}
              />
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    // let classes = ['red', 'bold'].join(' ')
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1> Coder's List</h1>
        <p className={classes.join(' ')}>This is Working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
