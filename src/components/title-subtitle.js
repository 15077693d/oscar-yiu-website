import { Box, Chip, makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'gatsby'
import { grey, blue, pink, containerMaxWidth, containerMinWidth, marginY } from '../utils/static-value'
const TitleSubtitle = ({ tags, title, subtitle, subtitle1, subtitle2, type }) => {
    const useStyles = makeStyles((theme) => ({
        container: {
            width: "80vw",
            [theme.breakpoints.up('sm')]: {
                marginTop: marginY * 3,
                marginBottom: marginY * 3,
            },
            [theme.breakpoints.up('md')]: {
                marginTop: marginY * 3,
                marginBottom: marginY * 4,
                minWidth: containerMinWidth,
                maxWidth: containerMaxWidth
            }
        },
        root: {
            position: "relative",
            width: "100%"
        },
        title: {
            textAlign: "center",
            color: blue,
            marginBottom: marginY,
        },
        subtitle: {
            textAlign: "center",
            marginBottom: marginY,
            color: grey
        },
        chips: {
            "& *": {
                margin: 2
            },
            display: "flex",
            flexWrap: 'wrap',
        },
        topShape: {
            backgroundColor: pink,
            width: "100%",
            height: 50,
            clipPath: "polygon(0% 0%, 0% 100%,100% 0%)",
            transform: "translateY(-1px)",
            marginBottom: marginY * 2
        },
    }))
    const classes = useStyles()
    let chipElements
    if (type === "blogs") {
        chipElements = tags.map(tag => <Link key={tag} to={`/blogs/category/${tag}/0`}><Chip label={tag} clickable size="medium" /></Link>)
        chipElements.push(<Link key={"all"} to="/blogs/0"><Chip label={"全部"} clickable size="medium" /></Link>)
    } else
        if (type === "blog") {
            chipElements = tags.map(tag => <Link key={tag} to={`/blogs/tag/${tag}/0`}><Chip label={tag} clickable size="medium" /></Link>)
        } else if (type === "projects") {
            chipElements = tags.map(tag => <Link key={tag} to={`/projects/${tag}`}><Chip label={tag} clickable size="medium" /></Link>)
            chipElements.push(<Link key="all" to="/projects"><Chip label={"全部"} clickable size="medium" /></Link>)
        }
    return (<Box>
        <Grid style={{ backgroundColor: pink }} container direction="column" alignItems="center">
            <Box className={classes.container}>
                <Typography className={classes.title} variant="h1">{title}</Typography>
                {
                    type === "blog" ? <Grid container style={{ marginBottom: marginY }} justify="center"><Link to={`/blogs/category/${subtitle1}/0`}><Typography style={{ display: "inline", color: "black" }} variant="h2">{subtitle1}</Typography> </Link><div>&nbsp;</div><Typography style={{ display: "inline", color: grey }} variant="h2">{" / " + subtitle2}</Typography></Grid>
                        : <Typography className={classes.subtitle} variant="h2">{subtitle}</Typography>
                }
                <Box className={classes.chips}>
                    {chipElements}
                </Box>
            </Box>
        </Grid>
        <Box className={classes.topShape} />
    </Box>
    );
};

export default TitleSubtitle;