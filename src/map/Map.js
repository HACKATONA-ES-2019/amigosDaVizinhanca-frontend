import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Map = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Mapa</h1>
    </div>
  );
};

export default Map;