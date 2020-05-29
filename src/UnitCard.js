import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Grid, TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({

  root: {
    minWidth: 275,

    marginTop:500,
    marginRight: 500,
    marginBottom: 500,
    marginLeft: 500,

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
    margin: theme.spacing(2),
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

  const fromUnit = ["kilogram", "pound", "ounce"]
  const toUnit = ["kilogram", "pound", "ounce"]


  const [weightConverter, updateWeightConverter] = useState(
    {
      from: "",
      to: "",
      value: "",
      convertedValue: "",
    }
  )

  const handleFromChange = (event) => {
    console.log("from: ", event.target.value)
    updateWeightConverter( { from: event.target.value  } )
  }

  const handleToChange = (event) => {
    console.log("to: ", event.target.value)
    updateWeightConverter( { to: event.target.value } )
  }

  const onChangeValue = (event) => {
    let convertedValue = 0
    if( weightConverter.from === "kilogram" ){
      if( weightConverter.from === "pound" ){
        convertedValue = weightConverter.value * 20462
      }else if( weightConverter.from === "ounce" ){
        const convertedValue = weightConverter.value * 35.274
      }
    }
    
    else if( weightConverter.from === "pound" ){
      if( weightConverter.from === "kilogram" ){
        convertedValue = weightConverter.value * 0.453592
      }else if( weightConverter.from === "ounce" ){
        convertedValue = weightConverter.value * 16
      }
    }
    
    else if( weightConverter.from === "ounce" ){
      if( weightConverter.from === "kilogram" ){
        convertedValue = weightConverter.value * 0.0283495
      }else if( weightConverter.from === "pound" ){
        convertedValue = weightConverter.value * 0.0625
      }
    }
    else{
      convertedValue = weightConverter.value
    }
    

    updateWeightConverter( { value: event.target.value, convertedValue: convertedValue } )
  }

  useEffect(() => {
    console.log("efeito ...");
  }, [weightConverter])

  return (
    <Card elevation="10" className={classes.root} variant="outlined">

      <CardContent>

      <Grid container spacing={3}>
        <Grid item xs={6}>
            
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            From
            </Typography>

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Weight</InputLabel>
                <Select
                  native
                  value={weightConverter.from}
                  onChange={handleFromChange}
                >
                <option aria-label="None" value="" />
                {
                  fromUnit.map(
                    unit => { return <option>{unit}</option> }
                  ) 
                }
                </Select>
              <TextField  ut onChange={onChangeValue}>value</TextField >
            </FormControl>
        </Grid>
        
        <Grid item xs={6}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            To
            </Typography>

            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Weight</InputLabel>
                <Select
                    native
                    value={weightConverter.to}
                    onChange={handleToChange}                 
                >
                    <option aria-label="None" value="" />
                    {
                      toUnit.map(
                        unit => { return <option>{unit}</option> }
                    ) 
                }
                </Select>
                <TextField value={weightConverter.convertedValue } />
            </FormControl>
        </Grid>
      </Grid>
      
      </CardContent>

      
    </Card>
  );
}