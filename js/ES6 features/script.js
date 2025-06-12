document.addEventListener("DOMContentLoaded",function(){
    const outputDiv=document.getElementById("output");

    // ES6 features 
    // Ex1 :- let & count declarations.
    let counter=0;
    const maxCount=5;

    //Ex2 :- Arrow functions
    const incrementCounter=()=>{
        counter++;
        updateOutput();
    };

    const updateOutput=()=>{
        outputDiv.innerHTML=`<p>Counter : ${counter}</p>`;
    };

    updateOutput();
    incrementCounter();

    //Ex3 - Template Literals(create arrow functionin a variable in a single line instead of using curly backets.)
    const greeting=name=>`Hello, ${name}`;

    //Ex4 :-Destructuring
    const person={name:'John',age:25,country:'UK'};    //this is the creation of object
    const {name,age}=person;

    outputDiv.innerHTML+=`<p>${greeting(name)}</p>`;    //passing it into div
    outputDiv.innerHTML+=`<p>Person : ${name},${age} years old.</p>`;
     
    //Ex5 :- Spread/rest operator
    const fruits=['appe','banana','orange','mango'];
    const moreFruits=['grape','kiwi','pineapple'];
    const allFruits=[...fruits,...moreFruits];

    outputDiv.innerHTML+=`<p>Fruits:- ${allFruits.join(',')}</p>`;

});