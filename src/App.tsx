import "./App.css";
import EmployeeCard from "./components/EmployeeCard";
import { useState } from "react";

function App() {
	const sampleEmployee = {
		name: {
			first: "Charlie",
			last: "Thompson",
		},
		email: "charlie.thompson@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
		},
	};
	const [employee, setEmployee] = useState(sampleEmployee);
	const getEmployee = () => {
		fetch(" https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmployee(data.results[0]);
			});
	};
	return (
		<>
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get Employee
			</button>
		</>
	);
}

export default App;
