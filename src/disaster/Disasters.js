import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import {initDisaster} from './DisasterActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

class Disasters extends Component{
  // const classes = useStyles();

  componentWillMount() {
    this.props.initDisaster()
  }
  
  render(){

    return (
      <div>
        <Box style={{ backgroundColor: 'white' }}>
          <select>
            <option value=""></option>
          </select>
        </Box>
      </div>
    );
  }

  
}
const mapDispatchToProps = dispatch => bindActionCreators({
  initDisaster
}, dispatch)
const mapStateToProps = state => ({
  disaster: state.disaster.data
})
export default connect(mapStateToProps, mapDispatchToProps)(Disasters)
