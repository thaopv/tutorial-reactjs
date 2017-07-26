import React, {Component} from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class Todo extends Component {
	render() {
		return (
			<div className="todo__content">
				<TodoInput />
				<TodoList />
			</div>
		);
	}
}

export default Todo;
