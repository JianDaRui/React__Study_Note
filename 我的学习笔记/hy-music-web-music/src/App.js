import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config' 
 
import { 
  BrowserRouter as Router, 
} from 'react-router-dom'

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './route/index'

export default memo(function App() {
  return (
    <Router>
      <AppHeader></AppHeader>
      { renderRoutes(routes) }
      <AppFooter></AppFooter>
    </Router>
  );
});
