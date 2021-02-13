import React, { Component } from 'react'

export default class Detail extends Component {
  constructor(params) {
    super(params)
    this.state = {
      content: [
        {id: '01', content: '你好，中国'},
        {id: '02', content: '你好，大瑞'},
        {id: '03', content: '你好，头条'}
      ]
    }
  }
  render() {
    console.log(this.props.match.params)
    const { id, title } = this.props.match.params
    const target = this.state.content.find(item => item.id === id)
    return (
      <div>
        <ul>
          <li>ID: { id }</li>
          <li>Title：{ title }</li>
          <li>Content：{ target.content }</li>
        </ul>
      </div>
    )
  }
}
