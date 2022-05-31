import './Expense.css'
import ExpenseItem   from  "./ExpenseItem/ExpenseItem"
import  NewExpense from '../NewExpense/NewExpense'
import ExpensesFilter from './ExpensesFilter/ExpenseFilter'
import { useState } from 'react';

function Expense (props){

    const [filteredYear, setFilteredYear]=useState('2020');
   function FilterChangeHandelr (SelectedYear){
        setFilteredYear(SelectedYear);
   }

   const filteredExpense=props.items.filter(expense=>{
       return expense.date.getFullYear().toString()===filteredYear;
   });
    return (
    <div className="expenses">
       <ExpensesFilter onChangeFilter={FilterChangeHandelr}/>
     {      filteredExpense.length === 0 ? (
     <p>No Expenses Year Found</p>)
     : (
            filteredExpense.map((expense)=>(
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            Date={expense.date}
            />
            )))
        }  
   

</div>)
}
export default Expense;