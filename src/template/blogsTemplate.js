import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'gatsby'
import TitleSubtitle from '../components/title-subtitle';
import BlogCard from '../components/blog-card'
import { makeStyles } from '@material-ui/core/styles';
import { containerMaxWidth, containerMinWidth, marginY } from '../utils/static-value'
import Btn from '../components/btn';
import Layout from '../components/layout'
const useStyle = makeStyles((theme) => ({
    container: {
        width: "80vw",
        [theme.breakpoints.up('md')]: {
            minWidth: containerMinWidth,
            maxWidth: containerMaxWidth,
            gridTemplateColumns: "1fr 1fr",
        },
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyItems: "center"
    },
    blogGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        }
    },
    emptyBlog: {
        width: "100%",
        height: 350,
        marginBottom: marginY * 2,
        borderRadius: 20,
        maxWidth: 400,
        maxHeight: 400,
        backgroundColor: "transparent",
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            width: 400,
            height: 400,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: 500,
            maxHeight: 500,
            width: 500,
            height: 500,
        }
    },
    btns: {
        width: '300px',
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
            width: '350px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '120px',
            alignItems: 'center',
            flexDirection: 'column'
        },
    }
}))

export default ({ pathContext }) => {
    const classes = useStyle()
    const { totalCategory, blogs, prevPage, nextPage } = pathContext
    console.log(pathContext)
    return (
        <Layout>
            <Box>
                <TitleSubtitle type="blogs" title={"我的網誌"} subtitle={"分享教材及日堂學習的過程，記錄向目標前進的點點滴滴。"} tags={totalCategory} />
                <Grid style={{ marginBottom: marginY }} container direction="column" alignItems="center">
                    <Box className={classes.container}>
                        {blogs.map(blog => <BlogCard key={`blog_${blog.id}`} blog={blog} />)}
                    </Box>
                    <Grid>
                        <Grid className={classes.btns} container>
                            <Link to={prevPage}><Btn text="上一頁" /></Link>
                            <Link to={nextPage}><Btn text="下一頁" /></Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};