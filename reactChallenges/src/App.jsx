import React, { useState } from "react";
function App() {
  const [user, setUser] = useState([]);
  const addUser = (newUser) => {
    console.log(newUser);
    setUser([...user, newUser]);
  };

  return (
    <div>
    </div>
  );
}

export default App;