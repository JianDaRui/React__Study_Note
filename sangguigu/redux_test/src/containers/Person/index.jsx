import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  addPerson = () => {
    const name = this.name.value;
    const age = this.age.value;
    const person = {id: nanoid(), name: name, age: age};
    console.log(person, this.props)
    this.props.addPerson(person)
  }
  render() {
    const {person} = this.props
    return (
      <div>
        <h1>我是Person组件</h1>
        <input ref={c => this.name = c} type="text" placeholder="请输入姓名" />
        <input ref={c => this.age = c} type="text" placeholder="请输入年龄" />
        <button onClick={this.addPerson}>添加人</button>
        <ul>
          {
            person.map(p => {
              return (
                <li key={p.id}>{p.name}————{p.age}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    person: state.person
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPerson: (person) => dispatch(createAddPersonAction(person))
  }
}
// 第一种方式

// export default connect( mapStateToProps, mapDispatchToProps)(Person)

// 第二种方式
export default connect( state =>({
  person: state.person
}), {
  addPerson: createAddPersonAction
})(Person)
