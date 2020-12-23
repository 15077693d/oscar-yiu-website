import { Box, Grid } from '@material-ui/core';
import TitleSubtitle from '../components/title-subtitle';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import { containerMaxWidth, containerMinWidth, marginY } from '../utils/static-value'
import SEO from "../components/seo";
import React from 'react';
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
    const { title, category, tags, created_at, content } = pathContext
    return (
        <Layout>
        <SEO title={title} />
            <TitleSubtitle type="blog" title={title} subtitle1={category} subtitle2={created_at} tags={tags} />
            <Grid container justify="center">
                <Box className={classes.container}>
                    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />;
                </Box>
            </Grid>
        </Layout>
    );
};

export default Blog;


