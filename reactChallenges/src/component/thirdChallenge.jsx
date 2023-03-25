import React, { useState } from "react";

function ButtonAndDiv() {
  const [isDivVisible, setIsDivVisible] = useState(true);
  const [buttonText, setButtonText] = useState("Hide Div Element");

  const handleClick = () => {
    setIsDivVisible(!isDivVisible);
    setButtonText(isDivVisible ? "Show Div Element" : "Hide Div Element");
  };

  return (
    <>
      {
        <div>
          <button onClick={handleClick} class="bg-red-400">
            {buttonText}
          </button>
          {isDivVisible && <div>I´m here!. Att:"The Div"</div>}
        </div>
      }
    </>
  );
}
export default ButtonAndDiv;
