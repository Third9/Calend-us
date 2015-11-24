/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const $ = require('jquery')
const AppBar = require('material-ui/lib/app-bar');
const ToolBar = require('material-ui/lib/toolbar/toolbar');
const ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
const RaisedButton = require('material-ui/lib/raised-button');
const FlatButton = require('material-ui/lib/flat-button');
const IconButton = require('material-ui/lib/icon-button')
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const TextField = require('material-ui/lib/text-field');

// const Router = require('react-router');



const Tool = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },
  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      loginId: '',
      loginPW: '',
    };
  },
  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  render() {
    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' },
    ];

    return (
      <div>
        <AppBar 
          iconElementLeft={
            <IconButton iconClassName="material-icons">today</IconButton>
          }
          title="Calend-us"
          iconElementRight={
            <FlatButton 
              label="Login" 
              style={{right:'50px'}}
              onTouchTap={this._handleLoginButton} />
          } />

          <Dialog
            title="Login"
            actions={standardActions}
            ref="loginDlg">
            <TextField
              hintText="Id or e-mail"
              floatingLabelText="e-mail" /><br/>
            <TextField
              hintText="password"
              floatingLabelText="password"
              type="password" />
          </Dialog>
        </div>
          );
    },

  _handleHomeButtonClick() {
    // this.refs.superSecretPasswordDialog.show();
  },

  _handleLoginButton() {
    console.log('_handleLoginButton')
    this.refs.loginDlg.show();
  },

});

module.exports = Tool;
