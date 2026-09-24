# 💰 Expense Tracker

A modern and responsive **Expense Tracker** built with **React.js**.
This project allows users to add, view, calculate, and delete expenses while automatically saving data to the browser's `localStorage`.

The project was built to practice important React concepts such as **state management, props, callback functions, hooks, controlled forms, component communication, and localStorage**.

---

## 🚀 Features

* ➕ Add a new expense
* 📝 Enter expense title, amount, and category
* 💰 Automatically calculate total expenses
* 🗑️ Delete expenses
* 💾 Persist expenses using `localStorage`
* 🔄 Expenses remain available after page refresh
* 🎯 Automatically focus the title input after adding an expense
* 📱 Responsive design
* 🎨 Clean and modern UI

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **React Hooks**

  * `useState`
  * `useEffect`
  * `useRef`
* **Browser LocalStorage**
* **Vite**

---

## 📂 Project Structure

```text
expense-tracker/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseItem.jsx
│   │   └── ExpenseList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🧩 Component Structure

```text
App
│
├── ExpenseForm
│
└── ExpenseList
      │
      └── ExpenseItem
```

### App.jsx

The main parent component responsible for:

* Managing the `expenses` state
* Loading expenses from `localStorage`
* Saving expenses to `localStorage`
* Adding expenses
* Deleting expenses
* Calculating total expenses
* Passing data and functions to child components

### ExpenseForm.jsx

Responsible for:

* Taking user input
* Managing form state
* Validating the form
* Creating a new expense object
* Sending the expense to `App`
* Clearing the form after submission
* Focusing the title input using `useRef`

### ExpenseList.jsx

Responsible for:

* Receiving the expenses array
* Checking whether expenses exist
* Rendering multiple `ExpenseItem` components using `map()`

### ExpenseItem.jsx

Responsible for displaying:

* Expense title
* Category
* Amount
* Delete button

---

## ⚛️ React Concepts Practiced

### 1. `useState`

Used to manage application and form state.

```js
const [expenses, setExpenses] = useState([]);
```

Form inputs are also managed using state:

```js
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState("");
```

---

### 2. `useEffect`

Used to synchronize expenses with `localStorage`.

```js
useEffect(() => {
  localStorage.setItem(
    "expenses",
    JSON.stringify(expenses)
  );
}, [expenses]);
```

Whenever `expenses` changes, the updated data is saved.

---

### 3. `useRef`

Used to access the title input and automatically focus it after adding an expense.

```js
const titleRef = useRef();

titleRef.current.focus();
```

---

### 4. Props

Data and functions are passed from the parent component to child components.

```jsx
<ExpenseList
  expenses={expenses}
  onDeleteExpense={deleteExpense}
/>
```

---

### 5. Callback Functions

The child component can communicate with the parent by calling a function received through props.

```jsx
<ExpenseForm onAddExpense={addExpense} />
```

Then inside `ExpenseForm`:

```js
onAddExpense(newExpense);
```

---

### 6. Controlled Components

Form inputs are controlled by React state.

```jsx
<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

---

### 7. Array Methods

The project uses JavaScript array methods such as:

#### `map()`

Used to display expenses:

```js
expenses.map((item) => ...)
```

#### `filter()`

Used to delete an expense:

```js
prev.filter((item) => item.id !== id)
```

#### `reduce()`

Used to calculate total expenses:

```js
expenses.reduce(
  (sum, item) => sum + item.amount,
  0
);
```

---

## 💾 LocalStorage

The application uses browser `localStorage` to persist expense data.

### Saving data

```js
localStorage.setItem(
  "expenses",
  JSON.stringify(expenses)
);
```

### Retrieving data

```js
const savedExpenses =
  localStorage.getItem("expenses");
```

### Converting JSON back to JavaScript

```js
JSON.parse(savedExpenses);
```

This allows expenses to remain available even after refreshing the browser.

---

## 📊 Expense Data Structure

Each expense is stored in the following format:

```js
{
  id: 123456789,
  title: "Pizza",
  amount: 250,
  category: "food"
}
```

Available categories:

* Food
* Transport
* Entertainment
* Shopping
* Other

---

## 🔄 Application Flow

```text
User enters expense
        ↓
ExpenseForm
        ↓
handleSubmit()
        ↓
Create expense object
        ↓
onAddExpense()
        ↓
App.jsx
        ↓
setExpenses()
        ↓
expenses state updated
        ↓
useEffect()
        ↓
localStorage updated
        ↓
ExpenseList
        ↓
ExpenseItem
        ↓
Expense displayed
```

---

## 🗑️ Delete Flow

```text
User clicks ❌
       ↓
ExpenseItem
       ↓
onDelete(item.id)
       ↓
ExpenseList
       ↓
deleteExpense(id)
       ↓
setExpenses()
       ↓
Expense removed
       ↓
localStorage updated
```

---


## 🖥️ Usage

1. Enter an expense title.
2. Enter the amount.
3. Select a category.
4. Click **Add Expense**.
5. The expense will appear in the list.
6. The total expense will update automatically.
7. Click ❌ to delete an expense.
8. Refresh the browser — your expenses will still be there because they are stored in `localStorage`.

---

## 🔮 Future Improvements

Possible features for future versions:

* ✏️ Edit expenses
* 🔍 Search expenses
* 🏷️ Filter by category
* 📅 Filter by date
* 📊 Expense charts
* 📈 Monthly expense summary
* 🌙 Dark mode
* 💰 Income and expense tracking
* 📤 Export expenses to CSV
* 🔐 User authentication
* ☁️ Backend/database integration
* 🌐 Deploy the application

---

## 🎯 Learning Objectives

This project was created to strengthen understanding of:

* React component architecture
* State management
* Props
* Parent-child communication
* Callback functions
* Controlled forms
* React Hooks
* `useState`
* `useEffect`
* `useRef`
* JavaScript array methods
* LocalStorage
* JSON parsing and stringification
* Responsive CSS

---

## 👨‍💻 Author

**Your Name**

Built with ❤️ using React.js.

---

## 📄 License

This project is created for learning and educational purposes.
