// /** In this file, we create a React component which incorporates components provided by material-ui */

// const React = require('react');
// const ReactDOM = require('react-dom');
// const $ = require('jquery')
// const FontIcon = require('material-ui/lib/font-icon');
// const RaisedButton = require('material-ui/lib/raised-button');
// const FloatingActionButton = require('material-ui/lib/floating-action-button');
// const FlatButton = require('material-ui/lib/flat-button');
// const IconButton = require('material-ui/lib/icon-button')
// const TextField = require('material-ui/lib/text-field');
// const Dialog = require('material-ui/lib/dialog');
// const GridList = require('material-ui/lib/grid-list/grid-list')
// const GridTile = require('material-ui/lib/grid-list/grid-tile')
// const ThemeManager = require('material-ui/lib/styles/theme-manager');
// const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
// const Colors = require('material-ui/lib/styles/colors');
// const Paper = require('material-ui/lib/paper');

// import { Router, Route, Link } from 'react-router'

// const Main = React.createClass({

//   childContextTypes: {
//     muiTheme: React.PropTypes.object,
    
//   },

//   getInitialState () {
//     return {
//       muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
//       floatingErrorText: 'This field is required.',
//     };
//   },

//   getChildContext() {
//     return {
//       muiTheme: this.state.muiTheme,
//     };
//   },

//   componentWillMount() {
//     let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
//       accent1Color: Colors.deepOrange500,
//     });
    
//     this.setState({muiTheme: newMuiTheme});
//   },

//   render() {

//     let containerStyle = {
//       textAlign: 'center',
//       paddingTop: '10px',
//     };

//     let standardActions = [
//       { text: 'Cancel' },
//       { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' },
//     ];

//     let data = [
//       {id: 1, title: "test1", info: "test1"},
//       {id: 2, title: "test2", info: "test2"},
//       {id: 3, title: "test3", info: "test3"},
//       {id: 4, title: "test1", info: "test1"},
//       {id: 5, title: "test2", info: "test2"},
//       {id: 6, title: "test3", info: "test3"},
//     ];

//     let floatingStyle = {
//       align: 'right',
//     };

//     return (
//       <div style={containerStyle}>
//         <Dialog
//           title="Calendar Add"
//           actions={standardActions}
//           ref="calendarAddDlg">
//           <TextField
//               hintText="Calendar name"
//               errorText={this.state.floatingErrorText}
//               floatingLabelText="Calendar name"
//               onChange={this._handleFloatingErrorInputChange} />
//         </Dialog>
//         <div>
//           <FloatingActionButton 
//             style={{position:'absolute', top:'40px', right:'20px'}} 
//             onTouchTap={this._handleTouchAdd} >
//             <FontIcon className="material-icons">add</FontIcon>
//           </FloatingActionButton>
//         </div>
//         <GridList
//           cols={5}
//           cellHeight={50}
//           style={{overflowY: 'auto'}}
//           >
//           {
//             data.map(tile =>
//               <GridTile
//                 key={tile.id}
//                 rows={2}
//                 onTouchTap={this._handleTouchTile.bind(this, tile.id)}
//               >
//               <Paper 
//                 zDepth={1}
//                 style={{height: '80px',
//                         margin: '0 auto',
//                         marginBottom: '64px',
//                         textAlign: 'center'}}>
//                 <p><Link to={`/tile/${tile.id}`}>{tile.title}</Link></p>
//               </Paper>
//             </GridTile>)
//           }
//         </GridList>
//       </div>
//     );
//   },

//   _handleFloatingErrorInputChange(e) {
//     console.log("_handleFloatingErrorInputChange : "+e.target.value)
//     this.setState({
//       floatingErrorText: e.target.value ? '' : 'This field is required.',
//     });
//   },

//   _handleTouchTile(id) {
//     console.log(id)

//     alert(id)
//   },

//   _handleTouchAdd(e) {
//     this.refs.calendarAddDlg.show();
//   },

//   _onDialogSubmit() {
//     console.log("_onDialogSubmit")
//     alert("Calanda add")
//     $.ajax({
//             url: 'http://localhost:5050',
//             dataType: 'json',
//             type: 'POST',
//             crossDomain: true,
//             cache: false,
//             success: function(data) {
//                 // this.setState({data: data});
//                 alert("test");
//             }.bind(this),
//             error: function(xhr, status, err) {
//                 alert("error");
//                 console.error(this.props.url, status, err.toString());
//             }.bind(this),
//         });
//   },

// });

// const Tile = React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>Tile</h2>
//       </div>
//       );
//   },
// });

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

function isDevReact() {
  try {
    React.createClass({});
  } catch(e) {
    if (e.message.indexOf('render') >= 0) {
      return true;  // A nice, specific error message
    } else {
      return false;  // A generic error message
    }
  }
  return false;  // should never happen, but play it safe.
};

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  },
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  },
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  },
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  },
})

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('main'))

module.exports = App;
