import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

function HYRecommend(props) {
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))
  // 组件和redux关联，获取数据和进行操作
  const dispatch = useDispatch();
  // 发送网络请求
  // dispatch 作为依赖
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  return (
    <div>
      DIV
      { topBanners.length }
    </div>
  )
}



export default memo(HYRecommend)
// function HYRecommend(props) {
//   const { getBanners, topBanners } = props
//   useEffect(() =>{
//     getBanners()
//     return () => {

//     }
//   }, [])
//   return (
//     <div>
//       DIV
//       { topBanners.length }
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchProps)(memo(HYRecommend))