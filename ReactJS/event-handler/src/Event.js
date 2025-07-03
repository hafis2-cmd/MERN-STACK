import React,{useState} from "react";

const Event=()=>{
    //State to track the visiblity of the message
    const [isVisible,setIsVisible]=useState(true);

    //function to handle the buttons
    const handleButtonClick=()=>{
        //toggle the visiblity state
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h2>Event Handling Example</h2>
            <button onClick={handleButtonClick}>Toggle Message</button>

            {isVisible && <p>This message is visible now!</p>}
        </div>
    );
};

export default Event;