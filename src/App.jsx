import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import "./App.css";
const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const totalExpenses = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="app">
      <h1>💰 Expense Tracker</h1>

      <h3>Total: ₹{totalExpenses.toFixed(2)}</h3>

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
};

export default App;