import React from 'react';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Grid, Chip, Box } from '@material-ui/core';
import { littleDarkGrey, grey, blue, marginY } from '../utils/static-value'
import { createAt2ChineseData } from '../utils/util'

const BlogCard = ({ blog }) => {
    const { id, image, title, summary, category, tags, created_at } = blog
    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            maxWidth:400,
            minHeight: 350,
            marginBottom: marginY * 2,
            borderRadius: 20,
            backgroundColor: littleDarkGrey,
            [theme.breakpoints.up('md')]: {
                width: 400,
                minHeight: 400,
            },
            [theme.breakpoints.up('lg')]: {
                width: 450,
                maxWidth:450,
                minHeight: 450,
            }
        },
        title: {
            marginTop: marginY,
            marginBottom: marginY / 2,
            fontWeight: 500,
            textAlign: 'center',
            cursor: "pointer",
            color: "black"
        },
        content: {
            marginTop: marginY / 2,
            marginBottom: marginY / 2,
            width: "80%",
            height: 70,
            textOverflow: "clip",
            overflow: "hidden",
            color: grey
        },
        date: {
            color: grey
        },
        category: {
            cursor: "pointer",
            color: blue
        },
        chipBox: {
            marginBottom: marginY,
            "& *": {
                backgroundColor: "write",
                margin: 2,
            },
            display: "flex",
            flexWrap: 'wrap',
            width: "80%"
        },
        image: {
            height: 170,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${image})`,
            width: "100%"
        },
        clip: {
            margin: 2,
            backgroundColor: "white",
            color: "black",
        }
    }));
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Link to={`/blog/${title}`}><Box className={classes.image} /></Link>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="column" justify="space-between" alignItems="center">
                    <Link to={`/blog/${title}`}><Typography className={classes.title} variant="h2">{title}</Typography></Link>
                    <Grid container justify="center">
                        <Link to={`/blogs/category/${category}/0`}><Typography className={classes.category} variant="h3">{category}</Typography></Link> &nbsp;
                    <Typography className={classes.date} variant="h3">{`/ ${created_at}`}</Typography>
                    </Grid>
                    <Typography className={classes.content} variant="h3">{summary}</Typography>
                    <Box className={classes.chipBox}>{tags.map(tag => <Link key={tag.tag} to={`/blogs/tag/${tag.tag}/0`}><Chip className={classes.clip} size="small" label={tag.tag} clickable /></Link>)}</Box>
                </Grid>
            </Grid>
        </Card>
    );
};

export default BlogCard;