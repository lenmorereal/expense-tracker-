import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';

function App() {
  const [expenses, setExpenses] = useState([]);
  
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="app-container">
      <Header />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
