import { Box, Grid } from '@material-ui/core';
import React from 'react';
import TitleSubtitle from '../components/title-subtitle';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import { containerMaxWidth, containerMinWidth, marginY } from '../utils/static-value'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "80vw",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            minWidth: containerMinWidth,
            maxWidth: containerMaxWidth
        }
    },
    blogContainer: {
        width: '100%',
    },
    youtube: {
        marginTop: marginY,
        width: '80vw',
        height: '30vh',
        [theme.breakpoints.up('sm')]: {
            minHeight: 300,
            height: '40vh',
            maxWidth: "800px"
        },
        marginBottom: marginY
    }
}))

const Blog = ({ pathContext }) => {
    const classes = useStyles()
    console.log(pathContext)
    const { title, category, tags, created_at, tableOfContent, content } = pathContext
    return (
        <Layout>
            <TitleSubtitle type="blog" title={title} subtitle1={category} subtitle2={created_at} tags={tags} />
            <Grid container justify="center">
                <Box className={classes.container}>
                    <div dangerouslySetInnerHTML={{ __html: tableOfContent }} />;
                    <div dangerouslySetInnerHTML={{ __html: content }} />;
                </Box>
            </Grid>
        </Layout>
    );
};

export default Blog;