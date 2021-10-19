import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config' 
import { Provider } from 'react-redux'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'
import store from './store'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './route/index'

export default memo(function App() {
  return (
    <Provider store={store}> 
      <Router>
        <AppHeader></AppHeader>
        { renderRoutes(routes) }
        <AppFooter></AppFooter>
      </Router>
    </Provider>
    
  );
});
