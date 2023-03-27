// import React from "react";

// function Button(props){
//     return(
//             <button class="bg-green-500 hover:bg-green mx-4"type="submit" onClick={props.onClick}>{props.text}</button>
//     );
// }
// export default Button;
import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-8" {...rest}>
      {children}
    </button>
  );
};

export default Button;
