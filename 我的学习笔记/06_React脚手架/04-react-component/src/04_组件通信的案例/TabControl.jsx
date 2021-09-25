import React, { Component } from 'react';

class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentIndex: 0;
    }
  }
  tabClick(index) {
    const { itemClick } = this.props;
    itemClick(index);
    this.setState({
      currentIndex: index
    })
  }
  render() { 
    const { titles } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div onClick={() => this.tabClick(index)} key={item} className={ "tab-item" + (index === currentIndex ? "active" : "")}>
                <span>{ item }</span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default TabControl;