import React, { useState } from "react";
import First from "./component/firstChallenge";
import Second from "./component/secondChallenge";
import Third from "./component/thirdChallenge";
import Fourt from "./component/fourthChallenge";
import SixthChallenge from './component/sixthChallenge';
import Five from "./component/fifthChallenge";
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
  } else if (currentPage === "fourt") {
    currentComponent = <Fourt />;
  } else if (currentPage === "five") {
    currentComponent = <Five />;
  }

  return (
   <div class="flex align-middle flex-col">
      <div class="flex justify-center flex-row">
        <button class="bg-red-100 mx-3" onClick={() => handleClick("first")}>
          Ir a la primera página
        </button>
        <button class="bg-red-100 mx-3" onClick={() => handleClick("second")}>
          Ir a la segunda página
        </button>
        <button class="bg-red-100 mx-3" onClick={() => handleClick("third")}>
          Ir a la tercera página
        </button>
        <button class="bg-red-100 mx-3" onClick={() => handleClick("fourt")}>
          Ir a la cuarta página
        </button>
        <button class="bg-red-100 mx-3" onClick={() => handleClick("five")}>
          Ir a la quinta página
        </button>
      </div>
      <div class="flex justify-center mt-4"> {currentComponent}</div>
    </div>
  );
}

export default App;
