import React, { memo } from 'react'
import {
  PlayerLeft,
  PlayerRight,
  PlayerWrapper,
} from './style'
import HYAppPlayBar from './app-play-bar';
export default memo( function HYPlayer(params) {
  return (
    <PlayerWrapper className="sprite_player">
      <HYAppPlayBar>Player</HYAppPlayBar>
    </PlayerWrapper>
  )
})
