import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props) {
   const [title, setTitle]= useState(props.title);
  
   function clickHandler(){
      setTitle("updated");
   }
  
    return (<div className="expense-item">
        <div>
       <ExpenseDate date={props.Date}></ExpenseDate>
            </div>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickHandler}>change Title</button>
        </div>

    </div>);
}
export default ExpenseItem;