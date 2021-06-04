import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useCalculate} from './CalculatorController'
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height:120,
        textAlign: 'right',
        color: theme.palette.text.secondary,
        alignContent: 'center',
        color: 'black',
        backgroundColor: "#e0e0e0",
        fontSize: 50,
       
    },
    next: {
        fontSize: 30,
    }
}));

export default function Display() {
    const {value , nextNumber} = useCalculate()
    const classes = useStyles();
    return (
        <Grid className={classes.paper}>
            <div className={classes.next}>{nextNumber}</div>
            <div >{value}</div>
        </Grid>
    )
}
