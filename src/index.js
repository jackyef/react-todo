import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/Greeting';

import './index.css';

/**
 * This is a class component, it has lifecycle methods and state.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchKeyword: '',
      addKeyword: '',
      todos: [
        {
          id: 1,
          message: 'Learn react',
          done: false
        },
        {
          id: 2,
          message: 'Learn diving',
          done: true
        }
      ]
    };
  }

  componentDidMount = () => {
    console.log('just mounted!');
  };

  handleSearchChange = event => {
    this.setState({
      searchKeyword: event.target.value
    });
  };

  handleAddChange = event => {
    this.setState({
      addKeyword: event.target.value
    });
  };

  handleAddTodo = () => {
    this.setState(prevState => {
      const prevAddKeyword = prevState.addKeyword;
      const prevTodos = prevState.todos;

      return {
        addKeyword: '',
        todos: [
          ...prevTodos, 
          { 
            id: new Date().getTime(), // use timestamp as unique ID
            message: prevAddKeyword, 
            done: false 
          }],
      };
    })
  }
  
  handleDelete = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== id),
      };
    })
  }

  handleToggleDone = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => ({
          ...todo,
          done: todo.id !== id ? todo.done : !todo.done,
        })),
      };
    })
  }

  renderTodos = () => {
    const { todos } = this.state;

    return todos.map((todo, index) => {
      const className = todo.done ? 'row linethrough' : 'row';
      const markLabel = todo.done ? 'Mark as not done' : 'Mark as done';
      const handleDelete = () => {
        this.handleDelete(todo.id);
      }
      const handleToggleDone = () => {
        this.handleToggleDone(todo.id);
      }

      return (
        <div className={className} key={todo.id}>
          <div>{index + 1}</div>
          <div>{todo.message}</div>
          <div>
            <button className="green" onClick={handleToggleDone}>{markLabel}</button>
          </div>
          <div>
            <button className="red" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      );
    });
  };

  render() {
    const { searchKeyword, addKeyword } = this.state;

    return (
      <div className="container">
        <Greeting name="@jackyef" />
        <div className="input-row">
          <div className="align-self-start">
            <label htmlFor="search">Search: </label>
            <input
              value={searchKeyword}
              onChange={this.handleSearchChange}
              type="text"
              name="search"
              placeholder="enter keyword here..."
            />
          </div>

          <div
            className="align-self-end"
          >
            <input
              type="text"
              placeholder="Example: read more blogs"
              value={addKeyword}
              onChange={this.handleAddChange}
            />
            <button className="blue" onClick={this.handleAddTodo}>
              Add to list
            </button>
          </div>
        </div>

        <div className="todo-container">
          <div className="row bold">
            <div>#</div>
            <div>To-do</div>
          </div>

          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
