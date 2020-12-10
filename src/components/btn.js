import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { blue } from '../utils/static-value'

const Btn = ({ text, marginTop, isSubmit,id }) => {
    const useStyle = makeStyles((theme) => ({
        btnStyle: {
            marginTop: marginTop,
            height: 44,
            width: 141,
            borderRadius: 30,
            border: `0px solid ${blue}`,
            backgroundColor: blue,
            color: "white",
            "&:hover": {
                backgroundColor: blue,
                color: "white",
            },
            [theme.breakpoints.up('md')]: {
                height: 54,
                width: 161,
            }
        }
    }))
    const classes = useStyle()
    const element = <Button id={id} type={isSubmit ? "submit" : ""} className={classes.btnStyle} ><Typography variant="h2">{text}</Typography></Button>
    return (
        element
    );
};

export default Btn;