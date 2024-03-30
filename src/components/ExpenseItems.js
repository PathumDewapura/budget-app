import React, { useContext } from 'react'
import { TiDelete } from "react-icons/ti";
import { AppContext } from '../context/AppContext';



const ExpenseItems=(props)=> {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = ()=>{
        dispatch({type: 'DELETE_EXPENSE',
        payload:props.id})
    }
    

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '10px', padding: '0.25em 0.5em', fontSize: '75%', fontWeight: '700', lineHeight: '1', textAlign: 'center', whiteSpace: 'nowrap', verticalAlign: 'baseline' }}>
                    LKR {props.cost}
                </span>
                {/* <span className='badge badge-primary badge-pill'>${props.cost}</span> */}
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>

            </div>
        </li>
    )
}

export default ExpenseItems
