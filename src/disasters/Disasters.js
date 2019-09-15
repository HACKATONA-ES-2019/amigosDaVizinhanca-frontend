import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { withStyles } from '@material-ui/styles';

import { initDisaster, selectedRegion, selectedYear, selectedMonth } from './DisasterActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const estadosBR = [
  {sigla: "BR", nome: "Brasil"},
  {sigla: "AC", nome: "Acre"},
  {sigla: "AL", nome: "Alagoas"},
  {sigla: "AP", nome: "Amapá"},
  {sigla: "AM", nome: "Amazonas"},
  {sigla: "BA", nome: "Bahia"},
  {sigla: "CE", nome: "Ceará"},
  {sigla: "DF", nome: "Distrito Federal", },
  {sigla: "ES", nome: "Espírito Santo", },
  {sigla: "GO", nome: "Goiás"},
  {sigla: "MA", nome: "Maranhão"},
  {sigla: "MT", nome: "Mato Grosso"},
  {sigla: "MS", nome: "Mato Grosso do Sul"},
  {sigla: "MG", nome: "Minas Gerais"},
  {sigla: "PA", nome: "Pará"},
  {sigla: "PB", nome: "Paraíba"},
  {sigla: "PR", nome: "Paraná"},
  {sigla: "PE", nome: "Pernambuco"},
  {sigla: "PI", nome: "Piauí"},
  {sigla: "RJ", nome: "Rio de Janeiro"},
  {sigla: "RN", nome: "Rio Grande do Norte"},
  {sigla: "RS", nome: "Rio Grande do Sul"},
  {sigla: "RO", nome: "Rondônia"},
  {sigla: "RR", nome: "Roraima"},
  {sigla: "SC", nome: "Santa Catarina"},
  {sigla: "SP", nome: "São Paulo"},
  {sigla: "SE", nome: "Sergipe"},
  {sigla: "TO", nome: "Tocantins"},
];

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const years = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

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
  }
});

class Disasters extends Component {

  componentWillMount() {
    this.props.initDisaster()
  }

  handleChangeMonth(event) {
    this.props.selectedRegion(event.target.value);
  }

  handleChangeYear(event) {
    this.props.selectedYear(event.target.value);
  }

  handleChangeRegion(event){
    this.props.selectedMonth(event.target.value)
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Typography variant="h2" className={classes.header}>Desastres</Typography>
            <Typography variant="subtitle2">Selecione uma região, um mês, um ano e um tipo de desastre para mais informações.</Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" className={classes.header}>Filtros</Typography>
            <Grid container spacing={4}>
              <Grid item xs={8}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="region">Região</InputLabel>
                  <Select
                    // value={values.age}
                    onChange={(event) => this.handleChangeRegion(event)}
                    input={<OutlinedInput name="region" id="region" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {estadosBR.map(estado => <MenuItem value={estado.sigla}>{estado.nome}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="month">Mês</InputLabel>
                  <Select
                    // value={values.age}
                    onChange={(event) => this.handleChangeMonth(event)}
                    input={<OutlinedInput name="mes" id="mes" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {months.map(month => <MenuItem value={month}>{month}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="year">Ano</InputLabel>
                  <Select
                    // value={values.age}
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
      </div>
    );
  }

  
}
const mapDispatchToProps = dispatch => bindActionCreators({
  initDisaster, selectedRegion, selectedYear, selectedMonth
}, dispatch)
const mapStateToProps = state => ({
  disaster: state.disaster.data
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Disasters));
