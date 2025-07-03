import React,{useState} from "react";

//Person component 
const Person=(props)=>{
    //State for the person's age
    const [age,setAge]=useState(25);

    const increaseAge=()=>{
        setAge(age+1);
    };

    const decreaseAge=()=>{
        setAge(age-1);
    };

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {age}</p>
            <button onClick={increaseAge}>Increase Age</button>
            <span style={{margin:'0 5px'}}></span>
            <button onClick={decreaseAge}>Decrease Age</button>
        </div>
    );
};

export default Person;