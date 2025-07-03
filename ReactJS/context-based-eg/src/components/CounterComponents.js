import react,{useState} from "react";
import { useStateValue } from "../context/CounterContext";

const CounterComponent=()=>{
    //accessing the state and dispatch from the context
    const {state,dispatch}=useStateValue();

    //setting up the local state for user input
    const [newNumber,setNewNumber]=useState('');

    //event handler to add a new number
    const handleAddNumber=()=>{
        //converting user input to number
        const inputNumber=parseInt(newNumber,10);

        if(!isNaN(inputNumber)){
            //if it's valid no. dispatch an action to add it to the number list
            dispatch({type:'ADD_NUMBER',payload:inputNumber});
            setNewNumber('');
        }else{
            alert('Please enter a valid integer in the textbox.');
        }
    };

    //event to remove the  last number
    const handleRemoveNumber=()=>{
        dispatch({type:'REMOVE_NUMBER'});
    };

    return(
        <div>
            <h2>React Context Example</h2>
            <h4>Counter Example</h4>
            <p>Count :- {state.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})} disabled={state.count === 0}>Decrement</button>
            
            <div>
                <h4>Number List Manager:- </h4>
                <label htmlFor="newNumber">Add New Number</label>
                <input
                    type="number"
                    id="newNumber"
                    value={newNumber}
                    onChange={(e)=>setNewNumber(e.target.value)}
                />
                <button type="button" onClick={handleAddNumber}>Add Number</button>
                <button type="button" onClick={handleRemoveNumber} disabled={state.numberList.length === 0}>
                    Remove Number</button>
            </div>
            <p>Number List :- {state.numberList.join(',')}</p>
        </div>
    );
};

export default CounterComponent;