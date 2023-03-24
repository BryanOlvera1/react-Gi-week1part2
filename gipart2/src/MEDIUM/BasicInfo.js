import React from "react";

export default function BasicInfo(props) {
   
    return (
      <div>
        <h2> Name:{props.person.name}</h2>
        <p>Age: {props.person.age}</p>
        <p>DOB: {props.person.DOB}</p>
      </div>
    );
  }
    