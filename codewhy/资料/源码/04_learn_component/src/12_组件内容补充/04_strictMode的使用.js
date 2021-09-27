import React, { PureComponent, StrictMode } from 'react';

// StrictMode只会对自己的子组件开启严格模式的校验
class Home extends PureComponent {
  constructor(props) {
    super(props);

    console.log("home constrcutor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("home componentWillMount");
  // }

  render() {
    return (
      <div ref="title">
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    console.log("profile constructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("profile componentWillMount");
  // }

  render() {
    return (
      <div ref="title">
        Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}
