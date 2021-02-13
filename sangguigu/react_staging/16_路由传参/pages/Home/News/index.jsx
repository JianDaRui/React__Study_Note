import React, { Component } from 'react'

export default class News extends Component {
  constructor(params) {
    super(params)
    this.state = {
      newsArr: [
        {id: '01', title: 'news01'},
        {id: '02', title: 'news02'},
        {id: '03', title: 'news03'}
      ]
    }
  }
  render() {
    const { newsArr } = this.state
    return (
      <div>
        <ul>
          {
            newsArr.map(item => {
              return (
                <li key={item.id}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
