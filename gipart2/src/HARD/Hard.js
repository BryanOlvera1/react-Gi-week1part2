import React from "react"; 
class App extends React.Component { 
  constructor(props) { // Constructor method, gets called when the component is first initialized
    super(props);
    this.state = { // Setting the initial state of the component
      people: [ 
        { name: "Bryan Olvera", age: 24, DOB: "06/26/1998" },
        { name: "Cheyenne Brooks", age: 25, DOB: "08/05/1997" },
        { name: "Milo", age: 3, DOB: "06/01/2020" }
      ]
    };
  }

  render() { // The render method, which defines what the component should render
    return (
      <div>
         {/* // Mapping over the people array and rendering a BasicInfo component for each person */}
        {this.state.people.map(person => ( 
          <BasicInfo person={person} key={person.name} /> 
        ))}
      </div>
    );
  }
}

function BasicInfo(props) { // Defining a functional component named BasicInfo
  return (
    <div>
      <h2> Name:{props.person.name}</h2> 
      <p>Age: {props.person.age}</p> 
      <p>DOB: {props.person.DOB}</p> 
    </div>
  );
}

export default App;