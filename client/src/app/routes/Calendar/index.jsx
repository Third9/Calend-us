module.exports = {
  path: 'calendar/:calendarId',
  
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Calendar'))
    })
  },
}
