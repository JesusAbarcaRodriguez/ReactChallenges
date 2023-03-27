import React, { useState } from "react";
import First from "./component/firstChallenge";
import Second from "./component/secondChallenge";
import Third from "./component/thirdChallenge";
import Fourt from "./component/fourthChallenge";
import Five from "./component/fifthChallenge";
import Sixth from "./component/sixthChallenge";
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
  } else if (currentPage === "six") {
    currentComponent = <Sixth />;
  }

  return (
    // <div>
      <div class="flex justify-center flex-row mx-">
        <button class="bg-blue-700 text-white px-4 py-2 rounded-md my-2 m" type="submit" onClick={() => handleClick("first")}>Ir a la primera página</button>
        <button class="bg-blue-700 text-white px-4 py-2 rounded-md my-2 m" type="submit" onClick={() => handleClick("second")}>Ir a la segunda página</button>
        <button class="bg-blue-700 text-white px-4 py-2 rounded-md my-2 m" type="submit" onClick={() => handleClick("third")}>Ir a la tercera página</button>
        <button class="bg-blue-700 text-white px-4 py-2 rounded-md my-2 m" type="submit" onClick={() => handleClick("fourt")}>Ir a la cuarta página</button>
        <button class="bg-blue-700 text-white px-4 py-2 rounded-md my-2 m" type="submit" onClick={() => handleClick("five")}>Ir a la quinta página</button>
        <button class="bg-blue-700 text-white px-4 py-2 rounded-md my-2 m" type="submit" onClick={() => handleClick("five")}>Ir a la Sext página</button>
      </div>
      // <div class="flex justify-center mt-4"> {currentComponent}</div>
      // </div>
  );
}

export default App;
