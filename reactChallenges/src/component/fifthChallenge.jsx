import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [text, setText] = useState("Texto predeterminado");

  const updateText = () => {
    setText("¡Texto actualizado!");
  };

  return (
    <div className="box-wrapper">
      <p>{text}</p>
      <ChildComponent onClick={updateText} />
    </div>
  );
}

export default ParentComponent;
