// (function () {
//   let React = require('react');
//   let ReactDOM = require('react-dom');
//   let injectTapEventPlugin = require('react-tap-event-plugin');
//   let Tool = require('./components/tool.jsx');
//   let Main = require('./components/main.jsx'); // Our custom react component
//   // let jquery = require('jquery')

//   //Needed for React Developer Tools
//   window.React = React;
//   // window.$ = jquery

//   //Needed for onTouchTap
//   //Can go away when react 1.0 release
//   //Check this repo:
//   //https://github.com/zilverline/react-tap-event-plugin
//   injectTapEventPlugin();

//   // Render the main app react component into the app div.
//   // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//   ReactDOM.render(<Tool />, document.getElementById('tool'));
//   // ReactDOM.render(<Main />, document.getElementById('main'));

// })();

/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'
import stubbedCourses from './stubs/COURSES'

const history = useBasename(createHistory)({
  basename: '/',
})

injectTapEventPlugin()

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/calendar'),
      // require('./routes/Course'),
      // require('./routes/Grades'),
      // require('./routes/Messages'),
      // require('./routes/Profile')
    ],
  } ],
}

render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('calendar')
)