import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import HYThemeHeader from '@/components/theme-header'
import { getAlbumsAction } from '../../store/actionCreators';
import HYAlbumCover from '@/components/album-cover';
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';


export default memo(function HYNewAlbum() {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  // other hooks
  const pageRef = useRef();

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAlbumsAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <HYThemeHeader title="新碟上架"> 
      </HYThemeHeader>
      <div className="content">
          <button className="arrow arrow-left sprite_02" 
                  onClick={e => pageRef.current.prev()}></button>
          <div className="album">
            <Carousel dots={false} ref={pageRef}>
              {
                [0, 1].map(item => {
                  return (
                    <div key={item} className="page">
                      {
                        newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                          return <HYAlbumCover key={iten.id} 
                                               info={iten} 
                                               size={100} 
                                               width={118} 
                                               bgp="-570px"/>
                        })
                      }
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <button className="arrow arrow-right sprite_02"
                  onClick={e => pageRef.current.next()}></button>
        </div>
    </AlbumWrapper>
  )
})