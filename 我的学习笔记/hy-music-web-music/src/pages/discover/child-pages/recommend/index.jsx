import React, { memo } from 'react'

import { 
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content
} from './style'
import HYTopBanner from './c-cpns/top-banner'
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRecommendRanking from './c-cpns/ranking'
import HYHotAnchor from './c-cpns/hot-anchor'
import HYUserLogin from './c-cpns/user-login'
import HYSettleSinger from './c-cpns/settle-singer'

function HYRecommend(props) {
  

  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner> 
      <Content>
        <RecommendLeft>
          {/* 热门推荐 */}
          <HYHotRecommend></HYHotRecommend>
          {/* 新碟上架 */}
          <HYNewAlbum></HYNewAlbum>
          {/* 榜单 */}
          <HYRecommendRanking></HYRecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          <HYHotAnchor></HYHotAnchor>
          <HYUserLogin></HYUserLogin>
          <HYSettleSinger></HYSettleSinger>
        </RecommendRight>
      </Content>
      
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