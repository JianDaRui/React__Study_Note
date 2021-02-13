import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail/index'
export default class Message extends Component {
  constructor(params) {
    super(params)
    this.state = {
      messageArr: [
        {id: '01', title: 'message01'},
        {id: '02', title: 'message02'},
        {id: '03', title: 'message03'}
      ]
    }
  }
  replaceShow = (id,title)=>{
		//replace跳转+携带params参数
		//this.props.history.replace(`/home/message/detail/${id}/${title}`)

		//replace跳转+携带search参数
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		//replace跳转+携带state参数
		this.props.history.replace(`/home/message/detail`,{id,title})
	}

	pushShow = (id,title)=>{
		//push跳转+携带params参数
		// this.props.history.push(`/home/message/detail/${id}/${title}`)

		//push跳转+携带search参数
		// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

		//push跳转+携带state参数
		this.props.history.push(`/home/message/detail`,{id,title})
		
	}

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	go = ()=>{
		this.props.history.go(-2)
	}
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              return (
                <li key={item.id}>
                  {/* 携带params参数 */}
                  {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{ item.title } </Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{ item.title } </Link>&nbsp;&nbsp; */}
                  {/* 向路由组件传递state参数 */}
                  <Link replace to={{pathname:`/home/message/detail`, state: { id:item.id, title: item.title }}}>{ item.title } </Link>&nbsp;&nbsp;
                  &nbsp;<button onClick={()=> this.pushShow(item.id,item.title)}>push查看</button>
									&nbsp;<button onClick={()=> this.replaceShow(item.id,item.title)}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收parmas参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
          
        {/* 声明接收search参数, 正常注册即可*/}
        <Route path="/home/message/detail" component={Detail}></Route>
        <button onClick={this.back}>回退</button>&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;
				<button onClick={this.go}>go</button>
      </div>
    )
  }
}
