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
        { id: 11, name: "Deepak", marks: 7 },
        { id: 12, name: "Preeti", marks: 0 },
        { id: 13, name: "Suresh", marks: 4 },
        { id: 99, name: "Kshitij", marks: 8 },
        { id: 100, name: "Mehak", marks: 86 }
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
            <ul>
                {students
                    .filter(student => student.name.length <= 3)
                    .map(student => (
                        <li key={student.id}>This is student = {student.name}</li>
                    ))}
            </ul>

            <button> This is count:<b>{count}</b></button>
        </>
    )
}

export default App