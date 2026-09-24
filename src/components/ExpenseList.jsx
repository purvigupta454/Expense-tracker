import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return <p>No expenses added yet. <br/></p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
          onDelete={onDeleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;