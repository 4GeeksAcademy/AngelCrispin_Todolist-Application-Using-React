import React from "react";
import ToDoList from './todolist.jsx'

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TO DOS</h1>
			<ToDoList/>
		</div>
	);
};

export default Home;
