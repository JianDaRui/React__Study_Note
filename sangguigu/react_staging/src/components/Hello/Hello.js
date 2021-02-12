import React, { Component } from 'react'
import hello from './Hello.module.css'
export default class Hello extends Component {
  render() {
    return (
      <div className={ hello.title }>
        Hello, 牛年大吉大利
      </div>
    )
  }
}
