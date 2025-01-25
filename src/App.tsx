import React, {useState} from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList, {Expense} from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";


function App() {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [expenses, setExpenses] = useState<Expense[]>([])

    const visibleExpenses = selectedCategory ? expenses.filter(el => el.category === selectedCategory) : expenses;
    return (
        <div>
            <div className={'mb-5'}>
                <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
            </div>
            <div className={'mb-3'}>
                <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
            </div>
            <ExpenseList onDelete={id => setExpenses(expenses.filter(el => el.id !== id))} expenses={visibleExpenses}/>
        </div>
    );
}

export default App;
