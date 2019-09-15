import React, {Component} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { withStyles } from '@material-ui/styles';

import { initDisaster, selectedRegion } from './DisasterActions';
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

const styles = (theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  formControl: {
    margin: theme.spacing(1),
  },
});

class Disasters extends Component {

  componentWillMount() {
    this.props.initDisaster()
  }

  handleChange(e) {
    console.log(e.target.value)
    // this.props.selectedRegion(region);
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="region">Região</InputLabel>
        <Select
          // value={values.age}
          onChange={(e) => this.handleChange(e)}
          input={<OutlinedInput labelWidth={200} name="age" id="outlined-age-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        {/* <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="region">
          Age
        </InputLabel>
        <Select
          // onChange={handleChange('age')}
          // labelWidth={labelWidth}
          inputProps={{
            name: 'region',
            id: 'region',
          }}
        >
          {estadosBR.map(estado => <option value={estado.sigla}>{estado.nome}</option>)}
        </Select>
      </FormControl> */}
      </div>
    );
  }

  
}
const mapDispatchToProps = dispatch => bindActionCreators({
  initDisaster, selectedRegion
}, dispatch)
const mapStateToProps = state => ({
  disaster: state.disaster.data
})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Disasters));
