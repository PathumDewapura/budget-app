import React, { useContext }from 'react'
import ExpenseItems from './ExpenseItems';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);

  return (
    <ul className='list-group'>
        {expenses.map((expense) =>(
        <ExpenseItems
            id={expense.id}
            name={expense.name}
            cost={expense.cost}/>
        ))}
    </ul>
  )
}

export default ExpenseList
