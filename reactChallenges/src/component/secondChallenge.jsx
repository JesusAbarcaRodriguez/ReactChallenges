import React, { useState } from "react";

function AnimalList() {
    return (
    <ul>
        {props.animals.map(animal => (
        <li key={animal.id}>{animal.name}</li>
        ))}
    </ul>
    );
}

// ReactDOM.render(<AnimalList animals={animals} />, document.getElementById("root"));

export default AnimalList;