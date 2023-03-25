import React, { useState } from 'react';

function ButtonAndDiv() {
    const [showDiv, setShowDiv] = useState(true);
    const [buttonText, setButtonText] = useState('Hide Div Element');
    const handleClick = () => {
    setShowDiv(false);
    setButtonText('Show Div Element');
}

return (
    <>
    {showDiv && (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
            <div>I´m here!. Att:"The Div"</div>
        </div>
    )}
    </>
);
}
export default ButtonAndDiv;