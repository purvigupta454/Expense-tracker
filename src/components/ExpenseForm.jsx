
import { useState, useRef } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category) {
      alert("Please fill in all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title.charAt(0).toUpperCase() + title.slice(1),
      amount: parseFloat(amount),
      category,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("");

    titleRef.current.focus();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={titleRef}
          placeholder="Enter your expense"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter your amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="shopping">Shopping</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

