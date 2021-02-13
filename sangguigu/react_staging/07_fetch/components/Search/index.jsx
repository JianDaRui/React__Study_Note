import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

import './index.css'

export default class Search extends Component {
  constructor(params) {
    // search = search.bind(this)
  }
  search = async() => {
    
    const { keyWordElement: {value} } = this;
    PubSub.publish('state', { isFirst: false, isLoading: true })
    // axios.get(`/api1/search/users2?q=${value}`).then(
    //   success => {
    //     console.log('success', success) 
    //     PubSub.publish('state', { isLoading: false, users: success.data.items })
    //   },
    //   error => { 
    //     PubSub.publish('state', { isLoading: false, error: error.message })
    //   }
    // )
    // fetch(`/api1/search/users2?q=${value}`).then(
    //   response => {
    //     console.log('success', response.json()) 
    //     return response.json()
    //     // PubSub.publish('state', { isLoading: false, users: success.data.items })
    //   }
    //   // error => { 
    //   //   return new Promise(() => {})
    //   //   // PubSub.publish('state', { isLoading: false, error: error.message })
    //   // }
    // ).then(
    //   response => {console.log('获取数据成功', response)},
    //   error => {console.log('获取数据失败')}
    // ).catch(err => {
    //   console.log(err)
    // })

    try {
			const response= await fetch(`/api1/search/users2?q=${value}`)
			const data = await response.json()
			console.log(data);
			PubSub.publish('atguigu',{isLoading:false,users:data.items})
		} catch (error) {
			console.log('请求出错',error);
			PubSub.publish('atguigu',{isLoading:false,err:error.message})
		}
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={(c) => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
