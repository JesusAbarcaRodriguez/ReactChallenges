import React from "react";

function SecondChallenge(props) {
  return (
    <div>
      <h1>My Animal List:</h1>
      <ul class="list-disc">
        {props.animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SecondChallenge;
