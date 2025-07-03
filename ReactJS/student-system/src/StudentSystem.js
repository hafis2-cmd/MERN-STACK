import React,{useState} from "react";

const StudentSystem=()=>{
    //State to store the list of students.
    const [students,setStudents]=useState([
        {id:1,name:'John Doe'},
        {id:2,name:'John Smith'},
        {id:3,name:'Jane Johnson'}
    ]);

    //state to track the name of the new student being added to the list.
    const [newStudentName,setNewStudentName]=useState('');

    //function to handle a new student to list
    const handleAddStudent=()=>{
        if(newStudentName.trim()==='') return;

        //create a new student object with a unique id
        const newStudent={
            id:new Date().getTime(),
            name:newStudentName,
        };

        //update the state with the new student added to the list
        setStudents([...students,newStudent]);

        //clear the input field for next new entry
        setNewStudentName('');
    };

    //JSX structure
    return(
        <div>
            <h1>Student Management System</h1>
            <ul>
                {students.map((student)=>(
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
            
            {/* // ...existing code... to show id
            <ul>
                 {students.map((student)=>(
                  <li key={student.id}>
                    ID: {student.id} - Name: {student.name}
                  </li>
         ))}
            </ul>
            // ...existing code... */}
            <div>
                <input type="text" placeholder="Enter Student Name" value={newStudentName}
                onChange={(e)=>setNewStudentName(e.target.value)}/>
                <button onClick={handleAddStudent}>Add Student</button>
            </div>
        </div>
    );
};

export default StudentSystem;