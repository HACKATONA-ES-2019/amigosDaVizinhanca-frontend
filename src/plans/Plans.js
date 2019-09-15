import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/styles';

import { selectedRegion, selectedYear, selectedMonth } from '../disasters/DisasterActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const months = [
  {num: 1, nome: 'Janeiro'},
  {num: 2, nome: 'Fevereiro'},
  {num: 3, nome: 'Março'},
  {num: 4, nome: 'Abril'},
  {num: 5, nome: 'Maio'},
  {num: 6, nome: 'Junho'},
  {num: 7, nome: 'Julho'},
  {num: 8, nome: 'Agosto'},
  {num: 9, nome: 'Setembro'},
  {num: 10, nome: 'Outubro'},
  {num: 11, nome: 'Novembro'},
  {num: 12, nome: 'Dezembro'},
];

const plans = [
  {nome: 'Combate à água parada', image: 'ink', i: 47, m: 580, p: 8, a: 'ações'},
  {nome: 'Vacinas', image: 'syringe', i: 32, m: 43, p: 74, a: 'mil'},
  {nome: 'Medicamentos', image: 'medicine', i: 89, m: 112, p: 79, a: 'mil'},

];

const years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

const subs = ['Zika', 'Chikungunya', 'Dengue'];

const styles = (theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  formControl: {
    fullWidth: true,
    display: 'flex',
    wrap: 'nowrap'
  },
  card: {
    marginTop: theme.spacing(4),
  },
  header: {
    marginBottom: theme.spacing(1),
  },
  button: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  buttonLabel: {
    marginTop: theme.spacing(1),
  }
});

class Plans extends Component {

  handleChangeMonth(event) {
    this.props.selectedMonth(event.target.value);
  }

  handleChangeYear(event) {
    this.props.selectedYear(event.target.value);
  }

  handleChangeRegion(event){
    this.props.selectedRegion(event.target.value)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Typography variant="h2" className={classes.header}>Planos de Ação</Typography>
            <Typography variant="subtitle2">Selecione uma subcategoria para gerar um plano de ação detalhado baseado na prevenção de desastres.</Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="body1" className={classes.header}><b>Desastre: </b>Epidemias</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} xl={6} sm={8}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="sub">Subcategorias</InputLabel>
                  <Select
                    value={this.props.region}
                    onChange={(event) => this.handleChangeRegion(event)}
                    input={<OutlinedInput name="sub" id="sub" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {subs.map(sub => <MenuItem value={sub}>{sub}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} xl={3} sm={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="month">Mês</InputLabel>
                  <Select
                    value={this.props.month}
                    onChange={(event) => this.handleChangeMonth(event)}
                    input={<OutlinedInput name="mes" id="mes" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {months.map(month => <MenuItem value={month.num}>{month.nome}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} xl={3} sm={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="year">Ano</InputLabel>
                  <Select
                    value={this.props.year}
                    onChange={(event) => this.handleChangeYear(event)}
                    input={<OutlinedInput name="year" id="year" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {years.map(year => <MenuItem value={year}>{year}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>

          </CardContent>
        </Card>
        <Grid container spacing={4} className={classes.card}>
          {plans.map(plan => {
            return (
              <Grid item xs={12} xl={6} sm={4} md={3} className={classes.button}>
                <Card>
                  <CardContent>
                    <img src={`/images/plan/${plan.image}.png`} alt={plan.nome}/>
                    <Typography className={classes.buttonLabel} variant="h4">{plan.nome}</Typography>
                    <Typography variant="h5">{`${plan.i} de ${plan.m} ${plan.a}`}</Typography>
                    <br/>
                    <Typography variant="h4">{`${plan.p}%`}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  selectedRegion, selectedYear, selectedMonth
}, dispatch)
const mapStateToProps = state => ({
  disaster: state.disaster.data,
  year: state.disaster.selectedAno,
  month: state.disaster.selectedMes,
  region: state.disaster.selectedRegion,
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Plans));