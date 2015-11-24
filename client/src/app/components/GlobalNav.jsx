import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/lib/app-bar'
import ToolBar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button'
import IconButton from 'material-ui/lib/icon-button'
import Dialog from 'material-ui/lib/dialog'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme'
import Colors from 'material-ui/lib/styles/colors'
import TextField from 'material-ui/lib/text-field'

let contextTypes = {
  muiTheme: React.PropTypes.object,
};

class GlobalNav extends React.Component {

  constructor(props, context) {
    super(props, context);

    this._handleLoginButton = this._handleLoginButton.bind(this)
    this._handleHomeButtonClick = this._handleHomeButtonClick.bind(this)

    this.state = { muiTheme: ThemeManager.getMuiTheme(LightRawTheme), 
                  loginId: '',
                  loginPW: ''}

  }

  // componentDidMount() {
  //     global.loginDlg = this.refs.loginDlg;
  // }

  getChildContext() {
    console.log('setting context!!');
    return {
      muiTheme: this.state.muiTheme,
    };
  }

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
    }

  _handleHomeButtonClick() {
    // this.refs.superSecretPasswordDialog.show();
  }

  _handleLoginButton() {
    console.log('_handleLoginButton')
    this.refs.loginDlg.show();
  }

}

GlobalNav.childContextTypes = contextTypes;

export default GlobalNav


