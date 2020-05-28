import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Grid } from '@material-ui/core';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({

  root: {
    minWidth: 275,

    marginTop:50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,

    flexGrow: 1,
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  root: {
    
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default function UnitCard() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    }); 
}

  return (
    <Card elevation="10" className={classes.root} variant="outlined">

      <CardContent>

      <Grid container spacing={3}>
        <Grid item xs={6}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            From
            </Typography>

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Weight</InputLabel>
                <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>kilogram</option>
                <option value={20}>pund</option>
                <option value={30}>ounce</option>
                </Select>
            </FormControl>
        </Grid>
        
        <Grid item xs={6}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            To
            </Typography>

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Weight</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'filled-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>kilogram</option>
                    <option value={20}>pound</option>
                    <option value={30}>ounce</option>
                </Select>
            </FormControl>
        </Grid>
      </Grid>
        
      

      </CardContent>

      <CardActions>
        <Button variant="contained" color="primary">
            Convert
        </Button>
      </CardActions>
      
    </Card>
  );
}