import React, { Component } from 'react';
import TabControl from './TabControl';

class App extends Component {
  constructor(props) {
    super(props);
    this.titles = ['新款', '精选', '流行']
    this.state = {
      currentTitle: "新款"
    }
  }
  itemCLick(index) {
    this.setState({
      currentTitle: this.titles[index]
    })
  }
  render() { 
    const { currentTitle } = this.state;
    return ( 
      <div>App
        <TabControl itemClick={index => this.itemCLick(index)} titles = {this.titles}/>
        <div>{currentTitle}</div>
      </div>
    );
  }
}
 
export default App;