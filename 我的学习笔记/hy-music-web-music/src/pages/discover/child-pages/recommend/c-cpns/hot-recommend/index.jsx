import React, { memo, useEffect, useSelector } from 'react'
import { shallowEqual, useDispatch } from 'react-redux'
import HYThemeHeader from '@/components/theme-header'
import { HOT_RECOMMEND_LIMIT } from '@/common/contants'
import {
  HotRecommendWrapper
} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'
export default memo(function HYHOtRecommend() {

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  
  // redux hooks
  const dispatch = useDispatch()

  // 其他hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    return () => {
    
    }
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <HYThemeHeader title="热门推荐" keywords={["摇滚", "电子", "华语", "流行", "民谣"]}>sdfdsf</HYThemeHeader>
      <div>
        {
          hotRecommends.map((item, index) => {
            return (
              <div>{item.name}</div>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
