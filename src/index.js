import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/Greeting';
import SearchInput from './components/SearchInput';
import AddTodoInput from './components/AddTodoInput';

import './index.css';
import TodoItem from './components/TodoItem';

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
          }
        ]
      };
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== id)
      };
    });
  };

  handleToggleDone = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => ({
          ...todo,
          done: todo.id !== id ? todo.done : !todo.done
        }))
      };
    });
  };

  renderTodos = () => {
    const { todos, searchKeyword } = this.state;

    return todos.map((todo, index) => {
      if (!todo.message.includes(searchKeyword)) {
        // just return null
        return null;
      }

      return (
        <TodoItem
          todo={todo}
          index={index}
          onDelete={this.handleDelete}
          onToggleDone={this.handleToggleDone}
        />
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
            <SearchInput
              value={searchKeyword}
              onChange={this.handleSearchChange}
            />
          </div>

          <div className="align-self-end">
            <AddTodoInput
              value={addKeyword}
              onChange={this.handleAddChange}
              onClick={this.handleAddTodo}
            />
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
