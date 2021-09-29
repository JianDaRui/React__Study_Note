import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3
    }
  }
  componentDidMount() {
    document.title = this.state.count
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = this.state.count
  }
  render() { 
    return (
      <div>
        当前技术：{this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1})}>+</button>
      </div>
    );
  }
}
 
export default App;