import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import FontIcon from 'material-ui/lib/font-icon'
import RaisedButton from 'material-ui/lib/raised-button'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import FlatButton from 'material-ui/lib/flat-button'
import IconButton from 'material-ui/lib/icon-button'
import TextField from 'material-ui/lib/text-field'
import Dialog from 'material-ui/lib/dialog'
import GridList from 'material-ui/lib/grid-list/grid-list'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme'
import Colors from 'material-ui/lib/styles/colors'
import Paper from 'material-ui/lib/paper'

import { Link } from 'react-router'

let contextTypes = {
    muiTheme: React.PropTypes.object,
};

class Dashboard extends React.Component {

  constructor(props, context) {
    super(props, context);
    
    this._handleTouchAdd = this._handleTouchAdd.bind(this)
    this._handleTouchTile = this._handleTouchCalendar.bind(this)

    this.state = {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      floatingErrorText: 'This field is required.',
    }
  }

  // getInitialState () {
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
  //     floatingErrorText: 'This field is required.',
  //   };
  // },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });
    
    this.setState({muiTheme: newMuiTheme});
  }

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '10px',
    };

    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' },
    ];

    let data = [
      {id: 1, title: "test1", info: "test1"},
      {id: 2, title: "test2", info: "test2"},
      {id: 3, title: "test3", info: "test3"},
      {id: 4, title: "test1", info: "test1"},
      {id: 5, title: "test2", info: "test2"},
      {id: 6, title: "test3", info: "test3"},
    ];

    let floatingStyle = {
      align: 'right',
    };

    return (
      <div style={containerStyle}>
        <Dialog
          title="Calendar Add"
          actions={standardActions}
          ref="calendarAddDlg">
          <TextField
              hintText="Calendar name"
              errorText={this.state.floatingErrorText}
              floatingLabelText="Calendar name"
              onChange={this._handleFloatingErrorInputChange} />
        </Dialog>
        <div>
          <FloatingActionButton 
            style={{position:'absolute', top:'40px', right:'20px'}} 
            onTouchTap={this._handleTouchAdd} >
            <FontIcon className="material-icons">add</FontIcon>
          </FloatingActionButton>
        </div>
        <GridList
          cols={5}
          cellHeight={50}
          style={{overflowY: 'auto'}}
          >
          {
            data.map(calendar =>
              <GridTile
                key={calendar.id}
                rows={2}
              >
              <Paper 
                zDepth={1}
                style={{height: '80px',
                        margin: '0 auto',
                        marginBottom: '64px',
                        textAlign: 'center'}}>
                <p><Link to={`/calendar/${calendar.id}`} >{calendar.id}</Link></p>
              </Paper>
            </GridTile>)
          }
        </GridList>
      </div>
    );
  }

  _handleFloatingErrorInputChange(e) {
    console.log("_handleFloatingErrorInputChange : "+e.target.value)
    this.setState({
      floatingErrorText: e.target.value ? '' : 'This field is required.',
    });
  }

  _handleTouchCalendar(id) {
    console.log(id)

  }

  _handleTouchAdd(e) {
    this.refs.calendarAddDlg.show();
  }

  _onDialogSubmit() {
    console.log("_onDialogSubmit")
    alert("Calanda add")
    $.ajax({
            url: 'http://localhost:5050',
            dataType: 'json',
            type: 'POST',
            crossDomain: true,
            cache: false,
            success: function(data) {
                // this.setState({data: data});
                alert("test");
            }.bind(this),
            error: function(xhr, status, err) {
                alert("error");
                console.error(this.props.url, status, err.toString());
            }.bind(this),
        });
  }

}

Dashboard.childContextTypes = contextTypes

export default Dashboard