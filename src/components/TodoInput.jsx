import React, {Component} from 'react';

class TodoInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: ''
		};

		this.addTodo = this.addTodo.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addTodo(event) {
		event.preventDefault();

		this.props.onAddingToto(this.state.todo);
	}

	handleChange(event) {
		this.setState({todo: event.target.value});
	}

	render() {
		return (
			<div className="todo__content--input">
				<form onSubmit={this.addTodo}>
					<label>Todo:
						<input type="text"
							className="common__input"
							placeholder="input new todo"
							value={this.state.todo}
							onChange={this.handleChange} />
					</label>
					<input type="submit"
						className="common__input"
						value="Add" />
				</form>
			</div>
		);
	}
}

export default TodoInput;
