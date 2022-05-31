
import { useState } from 'react';

import './NewExpense.css'
function NewExpense( props){
    const [enterdTitle,SetEntertedTitle]=useState('');
    const [enterdAmount,SetEntertedAmount]=useState('');
    const [enterdDate,SetEntertedDate]=useState('');

  /*  const [userinput, setuerinput]=useState({
        enterdTitle:'',
        enterdAmount:'',
        enterdDate:''
});*/
    function titleChangeHandler(event){
        SetEntertedTitle(event.target.value);

    }
    function AmountChangeHandler(event){
        SetEntertedAmount(event.target.value);

    }
    function DateChangeHandler(event){
        SetEntertedDate(event.target.value);

    }

    function submitHandelr(event){
        event.preventDefault();
        const expenseDate ={
            title:enterdTitle,
            amount:enterdAmount,
            date:new Date( enterdDate)

        }
        console.log(expenseDate)
        props.onSaveExpense(expenseDate);
        SetEntertedTitle("");
        SetEntertedAmount("");
        SetEntertedDate("");

    }


    return (
        <div className='new-expense'>
            <form onSubmit={submitHandelr}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enterdTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enterdAmount} min=".01" step=".01" onChange={AmountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enterdDate} min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler}/>
                    </div>
                    <div className='new-expense__actions'>
                        <button type='submit'>Add Expense</button>

                    </div>
                </div>
                
            </form>
        </div>
    );
}
export default NewExpense;