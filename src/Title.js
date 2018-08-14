import React, { Component } from 'react';

import Items from './Items';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  itemList(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        list: {
          text: this._inputElement.value,
          key: Date.now(),
        }
      };
   
      this.setState((prevState) => {
        return { 
          list: prevState.list.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
       
    e.preventDefault();
  }

  createTitles(item) {
    return (
      <div key={item.key}>
        <li >{item.text}</li>

        <form onSubmit={this.itemList.bind(this)}>
          <input ref={(a) => this._inputElement = a} placeholder="enter item" />
          <button type="submit">add</button>
        </form>

        <Items list={this.state.list} />
      </div>
    )
  }

  render() {
    var items = this.props.items;
    var listTitle = items.map(this.createTitles.bind(this));
  
    return (
      <ul className="theList">
        {listTitle}
      </ul>
    );
  }
}

export default Title;
