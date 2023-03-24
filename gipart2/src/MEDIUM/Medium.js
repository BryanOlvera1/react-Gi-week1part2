import React from "react"

import BasicInfo from "./BasicInfo";
// creating a new class component called App
class App extends React.Component {
  //starting the constructor method of the component
  constructor(props) {
    // Call the constructor method of the React.Component class with the props parameters
    super(props);
    // Initialize the state of the component with a person object, which contains the person's info
    this.state = {
      person: {
        name: "Bryan Olvera",
        age: 24,
        DOB: "06/26/1998"
      }
    };
  }

  render() {
    // Returns a div element and a BasicInfo component, which is passed a person prop that contains the person object stored in the component's state using brackets and the this keyword
    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

// // Define a new function component called BasicInfo
// function BasicInfo(props) {
//   // Returns with a div element with three child elements using props
//   return (
//     <div>
//       <h2> Name:{props.person.name}</h2>
//       <p>Age: {props.person.age}</p>
//       <p>DOB: {props.person.DOB}</p>
//     </div>
//   );
// }

export default App;
