import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import { DUMMY_EXPENSE } from "./dummy-data/dummy_expense";

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
