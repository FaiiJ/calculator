import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useCalculate} from './CalculatorController'
 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "black"
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        alignContent: 'center',
        color: 'white',
        backgroundColor: "#616161",
        width: 135,
        fontSize: 20
    },
    equal: {
        padding: theme.spacing(3),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        alignContent: 'center',
        color: 'white',
        backgroundColor: "green",
        width: 270,
        fontSize: 20
    },
    num: {
        padding: theme.spacing(3),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        alignContent: 'center',
        color: 'white',
        backgroundColor: "gray",
        width: 135,
        fontSize: 20
    },
    AC: {
        padding: theme.spacing(3),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        alignContent: 'center',
        color: 'white',
        backgroundColor: "red",
        width: 135,
        fontSize: 20
    }

}));

export default function Input() {
    const {onClickNumber} = useCalculate()
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid>
                <Button onClick={() => onClickNumber("AC")} className={classes.AC} value="AC">AC</Button >
                <Button onClick={() => onClickNumber("C")} className={classes.paper} value="C">C</Button >
                <Button onClick={() => onClickNumber("-/+")} className={classes.paper} value="-/+">-/+</Button >
                <Button onClick={() => onClickNumber("/")} className={classes.paper} value="÷">÷ </Button >
            </Grid>
            <Grid>
                <Button onClick={() => onClickNumber("7")} className={classes.num} value="7">7</Button >
                <Button onClick={() => onClickNumber("8")} className={classes.num} value="8">8</Button >
                <Button onClick={() => onClickNumber("9")} className={classes.num} value="9">9</Button >
                <Button onClick={() => onClickNumber("x")}className={classes.paper} value="x">x</Button >
            </Grid>
            <Grid>
                <Button onClick={() => onClickNumber("4")} className={classes.num} value="4">4</Button >
                <Button onClick={() => onClickNumber("5")} className={classes.num} value="5">5</Button >
                <Button onClick={() => onClickNumber("6")} className={classes.num} value="6">6 </Button >
                <Button onClick={() => onClickNumber("-")} className={classes.paper} value="-">- </Button >
            </Grid>
            <Grid>
                <Button onClick={() => onClickNumber("1")} className={classes.num} value="1">1</Button >
                <Button onClick={() => onClickNumber("2")} className={classes.num} value="2">2</Button >
                <Button onClick={() => onClickNumber("3")} className={classes.num} value="3">3</Button >
                <Button onClick={() => onClickNumber("+")} className={classes.paper} value="+">+</Button >
            </Grid>

            <Grid>
                <Button onClick={() => onClickNumber("0")} className={classes.num} value="0">0</Button >
                <Button onClick={() => onClickNumber(".")} className={classes.num} value=".">.</Button >
                <Button onClick={() => onClickNumber("=")} className={classes.equal} value="=">=</Button >
            </Grid>
        </React.Fragment>
    )
}
