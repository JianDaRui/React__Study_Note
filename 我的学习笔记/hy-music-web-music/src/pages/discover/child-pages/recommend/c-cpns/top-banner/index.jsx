import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';

import { 
  BannerWrapper,
  BannerControl, 
  BannerRight, 
  BannerLeft
} from './style'
export default memo(function HYTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);


  // 其他hooks
  const bannerRef = useRef();

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend", "topBanners"])
    // topBanners: state.get("recommend").get("topBanners")
  }), shallowEqual)
  // 组件和redux关联，获取数据和进行操作
  const dispatch = useDispatch();
  // 发送网络请求
  // dispatch 作为依赖
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  // 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
        <Carousel ref={bannerRef} beforeChange={bannerChange} effect="fade" autoplay>
          {
            topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })
          }
        </Carousel>,
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})