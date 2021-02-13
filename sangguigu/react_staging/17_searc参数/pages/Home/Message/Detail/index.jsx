import React, { Component } from 'react'
import qs from 'querystring'
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
    // 接受params参数console.log()
    // console.log(this.props.match.params)
    // const { id, title } = this.props.match.params
    // 接受search参数
    const { search } = this.props.location 
    const { id, title } = qs.parse(search.slice(1))
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
