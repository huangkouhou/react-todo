import React from "react"
import { Button } from 'react-bootstrap';

export const TodoRowItem: React.FC <{
    rowNumber:number, 
    rowDescription: string, 
    rowAssigned: string, 
    deleteTodo: Function
}> = (props) => {

    return (
        <tr >
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>

            <td>
            <Button variant="danger" onClick={() => props.deleteTodo(props.rowNumber)}>
            Delete
            </Button>
            </td>
        </tr>
    )
}

