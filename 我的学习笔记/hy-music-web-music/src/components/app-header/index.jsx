import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function AppHeader(props) {
  return (
    <div>
      <NavLink to="discover">发现音乐</NavLink>
      <NavLink to="mime">我的音乐</NavLink>
      <NavLink to="friends">我的好友</NavLink>
    </div>
  )
})
