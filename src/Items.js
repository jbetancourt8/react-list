import React, { Component } from 'react';

class Items extends Component {
  createItems(item) {
    const list = item.list;
    
    return <li key={list.key}>{list.text}</li>
  }

  render() {
    
    var list = this.props.list;
    var itemList = list.map(this.createItems.bind(this));
  
    return (
      <ul className="theList">
        {itemList}
      </ul>
    );
  }
}

export default Items;
