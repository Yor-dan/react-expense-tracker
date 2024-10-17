import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import CategoryFilter from './components/CategoryFilter';
import ExpenseList from './components/ExpenseList';

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState('');

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  const handleSelectCategory = (category: string) => {
    setCategory(category);
  };

  const expensesToShow = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  return (
    <div className="container my-2 d-flex flex-column gap-3">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <CategoryFilter onSelectCategory={handleSelectCategory} />
      <ExpenseList
        expenses={expensesToShow}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;
