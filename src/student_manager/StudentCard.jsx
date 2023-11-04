import React from 'react'

export default function StudentCard({stt, studentOBJ, handleDeteleStudent}) {
    return (
        <tr key={studentOBJ.id}>
            <th scope="row">{stt}</th>
            <td>{studentOBJ.name}</td>
            <td>{studentOBJ.sex ? "Nam" : "Nữ"}</td>
            <td>{studentOBJ.dob}</td>
            <td>
                <button className='btn btn-danger' onClick={() => {
                    handleDeteleStudent(studentOBJ.id)
                }}>Delete</button>
            </td>
        </tr>
    )
}
