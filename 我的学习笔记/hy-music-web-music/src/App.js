import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import routes from './route';
import store from './store';

import { HashRouter } from 'react-router-dom';
import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
import HYAppPlayerBar from './pages/player/app-play-bar';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <HYAppFooter />
        <HYAppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})

