import React from 'react';
import './App.css';


// Create a simple app that:

// Displays a list of students.

// Shows only students who passed (marks >= 33).

// Renders data using .map() and filters with .filter().

// Uses a helper function to show count of passed students.



function App() {
    const students = [
        { id: 1, name: "Rohit", marks: 60 },
        { id: 2, name: "Simran", marks: 85 },
        { id: 3, name: "Aarti", marks: 45 },
        { id: 4, name: "Raj", marks: 50 },
        { id: 5, name: "Ankit", marks: 30 },
        { id: 6, name: "Pooja", marks: 72 },
        { id: 7, name: "Nikhil", marks: 58 },
        { id: 8, name: "Kiran", marks: 91 },
        { id: 9, name: "Mohit", marks: 34 },
        { id: 10, name: "Neha", marks: 0 },
        
    ];

    let count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks >= 33) {
            count++;
        } else {
            continue;
        }
    }

    return (
        <>
            <h1> Displays a list of students.</h1>
            <ul>
                {students.filter((student) => (
                    student.marks >= 33
                )).map((student) => (
                    <li key={student.id}> {student.name} </li>
                ))}
            </ul>

            {/* <ul>
                {students.filter(student =>student.name.length >= 3).map((student) => (
                    <li key={student.id}> This is student  =  {student.name} </li>
                ))
                }
            </ul> */}
            <h2>This is a practice student Name length</h2>
            <ul>
                {students
                    .filter(student => student.name.length <= 3)
                    .map(student => (
                        <li key={student.id}>This is student = {student.name}</li>
                    ))}
            </ul>
            <h2>This is a practice for the odd number</h2>
            {students
            .filter(student => student.id % 2 !== 0).map((student) =>(
                <li> This Odd number  data render {student.name} </li>
            ))

            }

            <button> This is count:<b>{count}</b></button>
        </>
    )
}

export default App