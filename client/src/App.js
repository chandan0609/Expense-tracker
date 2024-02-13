import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';


function App() {
	const initialIncome = JSON.parse(localStorage.getItem("income")) || [];
	const [income, setIncome] = useState(initialIncome);
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < income.length; i++) {
			temp += parseInt(income[i].price);
		}

		setTotalIncome(temp);
		localStorage.setItem("income", JSON.stringify(income));
	}, [income]);
	

	return (
		<div className="App">
			<Header totalIncome={totalIncome} />
			<IncomeForm income={income} setIncome={setIncome} />
			<IncomeList income={income} setIncome={setIncome} />
  
		</div>
	);
}

export default App;
