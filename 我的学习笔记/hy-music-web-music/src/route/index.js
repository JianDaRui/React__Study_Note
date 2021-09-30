
import HYDiscover from '../pages/discover/index';
import HYFriends from '../pages/friends/index';
import HYPlayer from '../pages/player/index';
import HYMime from '../pages/mime/index';

const routes = [
  {
    path: "/",
    exact: true,
    component: HYDiscover
  },{
    path: "/discover",
    exact: true,
    component: HYDiscover
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
    component: HYMime
  } 
]
export default routes;
