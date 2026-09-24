
 const ExpenseItem = ({ item, onDelete }) => {
  return (
    <div className='expense-item'>
      <span>{item.title}</span>
      <small>{item.category}</small>
      <span>
        ₹{item.amount.toFixed(2)}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </div>
  )
}
export default ExpenseItem 

