import React, { Component } from 'react';
import './App.css';

import Title from './Title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleSubmit(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        list: {}
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
       
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            List Title:
            <input ref={(a) => this._inputElement = a} placeholder="enter title" />
          </label>
          <button type="submit">add</button>
        </form>

        <Title items={this.state.items} />
      </div>
    );
  }
}

export default App;
