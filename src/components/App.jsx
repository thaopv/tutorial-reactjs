import React, {Component} from 'react';
import Header from './Header';
import Todo from './Todo';

class App extends Component {
	render() {
		return (
			<div className="todo">
				<Header />
				<Todo />
			</div>
		);
	}
}

export default App;
