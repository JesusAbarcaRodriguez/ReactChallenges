import React, { useState } from "react";
import First from "./component/firstChallenge";
import Second from "./component/secondChallenge";
import Third from "./component/thirdChallenge";
import Fourth from "./component/fourthChallenge";
import Five from "./component/fifthChallenge";
import Sixth from "./component/sixthChallenge";
import Button from "./component/button";
function App() {
  const [animals, setAnimals] = useState([
    { id: 1, name: "Tiger" },
    { id: 2, name: "Lion" },
    { id: 3, name: "Python" },
  ]);

  const [currentPage, setCurrentPage] = useState("first");

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  let currentComponent;
  if (currentPage === "first") {
    currentComponent = <First />;
  } else if (currentPage === "second") {
    currentComponent = <Second animals={animals} />;
  } else if (currentPage === "third") {
    currentComponent = <Third />;
  } else if (currentPage === "fourth") {
    currentComponent = <Fourth />;
  } else if (currentPage === "five") {
    currentComponent = <Five />;
  } else if (currentPage === "six") {
    currentComponent = <Sixth />;
  }

  const App = () => {
    return (
      <div>
        <Button>Click me</Button>
        <Button className="ml-2">Or click me</Button>
      </div>
    );
  };

  return (
    <div class="h-full w-full">
      <div class="flex justify-center flex-row px-8 mx-7 ">
        <Button onClick={() => handleClick("first")} >Ir al primer reto</Button>
        <Button onClick={() => handleClick("second")}>Ir al segundo reto</Button>
        <Button onClick={() => handleClick("third")}>Ir al tercer reto</Button>
        <Button onClick={() => handleClick("fourth")}>Ir al cuarto reto</Button>
        <Button onClick={() => handleClick("five")}>Ir al quinto reto</Button>
        <Button onClick={() => handleClick("six")}>Ir al sexto reto</Button>
      </div>
      <div class="flex justify-center mt-4"> {currentComponent}</div>
   </div>
  );
}

export default App;
