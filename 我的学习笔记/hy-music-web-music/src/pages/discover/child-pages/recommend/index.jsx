import React, { memo } from 'react'

import { RecommendWrapper } from './style'
import HYTopBanner from './c-cpns/top-banner'

function HYRecommend(props) {
  

  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner> 
    </RecommendWrapper>
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