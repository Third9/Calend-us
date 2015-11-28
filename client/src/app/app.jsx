/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import createHistory from 'history/lib/createHashHistory';
// import BrowserHistory from 'history/lib/BrowserHistory'
// import { createHistory, useBasename } from 'history'
import { Router, Route } from 'react-router'
import App from './components/App.jsx'
import Calendar from './routes/Calendar'

// const history = useBasename(createHistory)({
//   basename: '/',
// })

const history = createHistory({
  queryKey: false,
});

injectTapEventPlugin()

const rootRoute = {
  path: '/',
  component: require('./components/App'),
  childRoutes: [
    require('./routes/Calendar'),
  ],
}

render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('calendar')
)