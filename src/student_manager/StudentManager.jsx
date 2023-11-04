import React, { useState } from 'react'
import StudentCard from './StudentCard'
export default function StudentManager() {
    // student (id, name, sex, dob)
    const [students, setStudents] = useState([{
        id: Date.now() * Math.random(),
        name: "Phước",
        sex: 1, // 0: nữ, 1: nam
        dob: "9999"
    }]);

    function handleDeteleStudent(studentId) {
        if(!window.confirm("Bạn chắc chắn muốn xóa?")) return
        setStudents(students.filter(student => student.id != studentId))
    }

    // function handleCreateStudent(newStudent) {
    //     setStudents([...students, newStudent])
    // }
    return (
        <div>
            <h2>StudentManager</h2>
            <button onClick={() => {
                setStudents([...students, {
                    id: Date.now() * Math.random(),
                    name: window.prompt("Nhập tên"),
                    sex: 0,
                    dob: "999"
                }])
            }}>Add</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Dob</th>
                        <th>tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            return (
                               <StudentCard handleDeteleStudent={handleDeteleStudent} key={student.id} studentOBJ={student} stt={index + 1}></StudentCard>
                            )
                        }) 
                    }
                </tbody>
            </table>
        </div>
    )
}
