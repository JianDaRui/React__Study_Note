import React, { memo, useEffect } from 'react'
import {connect} from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'
function HYRecommend(props) {
  const { getBanners, topBanners } = props
  useEffect(() =>{
    getBanners()
    return () => {

    }
  }, [])
  return (
    <div>
      DIV
      { topBanners.length }
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})
const mapDispatchProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchProps)(memo(HYRecommend))