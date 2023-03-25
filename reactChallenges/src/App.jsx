import React, { useState } from "react";
import First from "./component/firstChallenge"
function App() {
  const [user, setUser] = useState([]);
  const addUser = (newUser) => {
    console.log(newUser);
    setUser([...user, newUser]);
  };

  return (
    <div class=" box-border bg-gray-700 to-#F6F1F1 rounded shadow h-0 flex flex-col justify-center">
      <First/>
    </div>
  );
}

export default App;
