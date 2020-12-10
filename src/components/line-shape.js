import React from 'react';
import { Box, makeStyles } from '@material-ui/core'
import { marginY } from '../utils/static-value'
const LineShape = ({ color, isTopic }) => {
    const useStyles = makeStyles((theme) => ({
        lineStyle: {
            marginTop: marginY / 2,
            width: "100%",
            backgroundColor: color,
            height: "3px",
            marginBottom: marginY,
            [theme.breakpoints.up("sm")]: {
                marginTop: isTopic ? marginY / 2 : marginY,
            }
        }
    }))
    const classes = useStyles()
    return <Box className={classes.lineStyle} />;
};

export default LineShape;