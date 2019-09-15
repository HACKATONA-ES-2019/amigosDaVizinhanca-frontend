import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/styles';

import BrazilMap from '../components/BrazilMap/BrazilMap';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Map = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h2">Mapa</Typography>
          <Typography variant="subtitle2">Selecione um estado brasileiro para exibir os desastres ocorridos em um determinado período.</Typography>
        </CardContent>
      </Card>
      <BrazilMap />
    </div>
  );
};

export default Map;