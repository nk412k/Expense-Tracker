import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App(){
	const DUMMY_expenses=[
	{
		id:'e1',
		title:"House rent",
		date:new Date(2022,3,21),
		amount:5000,
	},
	{
		id:'e2',
		title:"Car EMI",
		date:new Date(2022,2,25),
		amount:25000,
	},
	{
		id:'e3',
		title:"New Phone",
		date:new Date(2020,4,21),
		amount:45000,
	},
	{
		id:'e4',
		title:"Electricity Bill",
		date:new Date(2022,1,21),
		amount:2000,
	},
	];

	const [expenses,setExpenses]=useState(DUMMY_expenses);

	const addExpenseHandler = (expense)=>{
		setExpenses((prevExpense)=>{
			return [expense,...prevExpense]
		});
	};

	return (
		<div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
		</div>
	)
}

export default App;