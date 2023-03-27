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
          <button onClick={handleClick} class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-8">
            {buttonText}
          </button>
          {isDivVisible ? <div>I´m here!. Att:"The Div"</div>:null}
        </div>
      }
    </>
  );
}
export default ButtonAndDiv;
