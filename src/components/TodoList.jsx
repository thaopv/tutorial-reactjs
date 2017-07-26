import React, {Component} from 'react';

class TodoList extends Component {
	renderTodoItem() {
		return this.props.todos.map(todo => <div key={todo}>{todo}</div>);
	}

	render() {
		return (
			<div className="todo__content--list">
				{this.renderTodoItem()}
			</div>
		);
	}
}

export default TodoList;
