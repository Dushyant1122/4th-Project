import React ,{Component, component } from 'react';
import './App.css';
import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from react!!!!</h1>
//       <h1>Hello from react!!!!</h1>
//       <Person/>
//     </div>
//   );
// }
class App extends Component{
  render()
 { return(
    <div className='App'>
      <h1> Hello, React App</h1>
      <p> This is Working!!</p>
      <Person/>
      <Person/>
      <Person/>
    </div>
  )}
}



export default App;
