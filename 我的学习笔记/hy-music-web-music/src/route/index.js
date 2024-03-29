import React from 'react';
import { Redirect } from "react-router-dom";

const HYDiscover = React.lazy(() => import("@/pages/discover"));
const HYRecommend = React.lazy(_ => import("../pages/discover/child-pages/recommend"));
const HYRanking = React.lazy(_ => import("../pages/discover/child-pages/ranking"));
const HYSongs = React.lazy(_ => import("../pages/discover/child-pages/songs"));
const HYDjradio = React.lazy(_ => import("../pages/discover/child-pages/djradio"));
const HYArtist = React.lazy(_ => import("../pages/discover/child-pages/artist"));
const HYAlbum = React.lazy(_ => import("../pages/discover/child-pages/album"));
const HYPlayer = React.lazy(_ => import("../pages/player"));

const HYFriends = React.lazy(_ => import("../pages/friend"));
const HYMine = React.lazy(_ => import("../pages/mine"));

// import HYDiscover from '@/pages/discover/index';
// import HYAlbum from '@/pages/discover/child-pages/album'
// import HYArtist from '@/pages/discover/child-pages/artist'
// import HYRecommend from '@/pages/discover/child-pages/recommend'
// import HYSongs from '@/pages/discover/child-pages/songs'
// import HYDjradio from '@/pages/discover/child-pages/djradio'
// import HYRanking from '@/pages/discover/child-pages/ranking'

// import HYFriends from '@/pages/friends/index';
// import HYPlayer from '@/pages/player/index';
// import HYMime from '@/pages/mime/index';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },{
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path: "/discover/player",
        component: HYPlayer
      }
    ]
  },{
    path: "/friends",
    exact: true,
    component: HYFriends
  },{
    path: "/player",
    exact: true,
    component: HYPlayer
  },{
    path: "/mime",
    exact: true,
    component: HYMine
  } 
]
export default routes;
