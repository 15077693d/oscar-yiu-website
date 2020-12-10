import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import LineShape from './line-shape';
import { grey, extraBrightGrey, marginY } from '../utils/static-value'
const MainTopic = ({ text }) => {
    const useStyles = makeStyles(() => ({
        text: {
            color: grey,
        },
        root: {
            marginTop: marginY * 2,
            width: "100%"
        }
    }))
    const classes = useStyles()
    return <Box className={classes.root}>
        <Typography className={classes.text} variant='h2'>{text}</Typography>
        <LineShape color={extraBrightGrey} isTopic={true} />
    </Box>
};

export default MainTopic;