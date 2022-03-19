import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    title: "Car Insurance 1",
    amount: 100,
    date: new Date(2020, 8, 2),
    id: "e1",
  }, // new Date(year, month, day)
  {
    title: "Car Insurance 2",
    amount: 200,
    date: new Date(2020, 9, 2),
    id: "e2",
  },
  {
    title: "Car Insurance 3",
    amount: 300,
    date: new Date(2021, 10, 2),
    id: "e3",
  },
  {
    title: "Car Insurance 4",
    amount: 400,
    date: new Date(2022, 11, 2),
    id: "e4",
  },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
