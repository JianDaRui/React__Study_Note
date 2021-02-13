import React, { Component } from 'react'
import { Button } from 'antd';
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Button type="primary" > Primary Button </Button>
        <WechatOutlined />
        <Button icon={<SearchOutlined />}>Search</Button>
    <br />
      </div>
    )
  }
}
