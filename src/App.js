import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance 1", amount: 100, date: new Date(2022, 8, 2) }, // new Date(year, month, day)
    { title: "Car Insurance 2", amount: 200, date: new Date(2022, 9, 2) },
    { title: "Car Insurance 3", amount: 300, date: new Date(2022, 10, 2) },
    { title: "Car Insurance 4", amount: 400, date: new Date(2022, 11, 2) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
