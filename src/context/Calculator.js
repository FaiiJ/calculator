import React, { useContext } from 'react'
import { useCalculate } from './CalculatorController'
import Input from './Input'
import Screen from './Display'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

export default function Calculator() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <div className={classes.root}>
                <Typography variant="h3" gutterBottom>
                    Calculator
                </Typography>
            </div>
            <Screen />
            <Input />
        </Container>
    )
}
