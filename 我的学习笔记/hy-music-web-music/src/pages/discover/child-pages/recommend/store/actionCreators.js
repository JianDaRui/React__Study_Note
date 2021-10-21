import * as actionTypes from './constants';
import { getTopBanners, getHotRecommends, getNewAlbums } from '@/services/recommend'
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res)
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      console.log(res)
      dispatch(changeHotRecommendAction(res))
    })
  }
}

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getAlbumsAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      console.log(res, "-----------")
      dispatch(changeNewAlbumsAction(res))
    })
  } 
}

const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})