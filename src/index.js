import React from 'react';
import ReactDOM from 'react-dom';

// to be used later!
// import Greeting from './components/Greeting';

import './index.css';

/**
 * This is a class component, it has lifecycle methods and state.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchKeyword: 'asd',
    };
  }

  componentDidMount = () => {
    console.log('just mounted!');
  }

  handleSearchChange = event => {
    this.setState({
      searchKeyword: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
  
        <div className="input-row">
          <div className="align-self-start">
            <label htmlFor="search">Search: </label>
            <input
              value={this.state.searchKeyword}
              onChange={this.handleSearchChange}
              type="text"
              name="search"
              placeholder="enter keyword here..."
            />
          </div>
          <div className="align-self-end">
            <input type="text" placeholder="Example: read more blogs" />
            <button className="blue">Add to list</button>
          </div>
        </div>
  
        <div className="todo-container">
          <div className="row bold">
            <div>#</div>
            <div>To-do</div>
          </div>
          <div className="row">
            <div>1</div>
            <div>Learn React</div>
            <div>
              <button className="green">Mark as done</button>
            </div>
            <div>
              <button className="red">Delete</button>
            </div>
          </div>
          <div className="row linethrough">
            <div>2</div>
            <div>Learn Webpack</div>
            <div>
              <button className="green">Mark as not done</button>
            </div>
            <div>
              <button className="red">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
