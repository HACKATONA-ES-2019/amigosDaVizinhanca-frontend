import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from '../../components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const ChartsPAHO = () => {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>        
        <div className='tableauPlaceholder' style={{width: "1300px",   height: "900px"}}><object className='tableauViz' width='900' height='850'><iframe src="https://phip.paho.org/views/Casosdedengue_chen/Trend?:embed_code_version=3&:embed=y&:loadOrderID=0&:comments=no&:display_spinner=no&:display_count=no&:showVizHome=no#28z7"></iframe><param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Casosdedengue_chen&#47;ByCountry' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='comments' value='no' /></object></div>

        <div></div>
    </div>
  );
};

export default ChartsPAHO;
