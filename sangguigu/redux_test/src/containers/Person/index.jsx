import React, { Component } from 'react'
import nanoid from 'nanoid'
import {connect} from 'react-redux'


class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  addPerson = () => {
    const name = this.name.value;
    const age = this.age.value;
    const person = {id: nanoid(), name: name, age: age};
    // this.props.
  }
  render() {
    return (
      <div>
        <h1>我是Person组件</h1>
        <input ref={c => this.name = c} type="text" placeholder="请输入姓名" />
        <input ref={c => this.age = c} type="text" placeholder="请输入年龄" />
        <input onClick={this.addPerson} type="button" placeholder="按钮" />
        <ul>
          <li>姓名————年龄</li>
          <li>姓名————年龄</li>
          <li>姓名————年龄</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = () =>{

}
const mapDispatchToProps = () => {}
export default connect( mapStateToProps, mapDispatchToProps)(Person)
