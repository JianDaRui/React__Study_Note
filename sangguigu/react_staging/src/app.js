
import React, { Component } from 'react';

// import TODOList from './TODOList'
import './app.css'
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
class App extends Component{
  constructor() {
    super()
    this.state = {
      todos:[
        {id: '001', name: '吃饭', done: false},
        {id: '002', name: '工作', done: false},
        {id: '003', name: '学习', done: true},
        {id: '004', name: '锻炼', done: false},
      ]
    }
  }
  addTodo = (todoObj) => {
    let { todos } = this.state
    console.log(todoObj, '-----')
    this.setState({
      todos: [todoObj, ...todos]
    })
  }
  updateToDo = (id, done) => {
    const { todos } = this.state
    let newTodo = todos.map(todoObj => {
      if(todoObj.id === id) {
        return { ...todoObj, done }
      } else {
        return todoObj
      }
    })
    this.setState({
      todos: newTodo
    })
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    let newTodo = todos.filter(item => {
      return item.id !== id
    })
    this.setState({
      todos: newTodo
    })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={ this.addTodo } />
          <List todos={ todos } updateToDo={ this.updateToDo } deleteTodo={this.deleteTodo}/>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App