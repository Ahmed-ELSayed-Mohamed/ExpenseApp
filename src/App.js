import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState  } from "react";

function App() {
  const initExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setNewExpenses]= useState(initExpenses);
  function addExpenseHandler(EnterExpenseData){
   console.log("new data",EnterExpenseData)
    setNewExpenses(prevExpense=>{
      
      const ExpenseData= {
        ...EnterExpenseData,id:Math.random().toString(),
    }
    console.log("new data",ExpenseData)
      console.log("new data",prevExpense)
      return [ExpenseData,...prevExpense];
    });

   /* const ExpenseData= {
        ...EnterExpenseData,id:Math.random().toString(),
        id:Math.random().toString()
    }
    //expenses.push(ExpenseData);
    console.log(ExpenseData)*/
}
  return (
    <div>
    <NewExpense onSaveExpense={addExpenseHandler}/>
   <Expense items={expenses}></Expense>
   </div>
  );
}

export default App;
