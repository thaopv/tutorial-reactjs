import React, {Component} from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};

		this.onAddingToto = this.handleAddingToto.bind(this);
	}

	handleAddingToto(todo) {
		this.state.todos.push(todo);

		this.setState(this.state.todos);
	}

	render() {
		return (
			<div className="todo__content">
				<TodoInput onAddingToto={this.onAddingToto} />
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
}

export default Todo;
