import Layout from "../components/layout"
import SEO from "../components/seo"
import { Grid, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'gatsby';
import Btn from '../components/btn';
import {
  pink, blue, brightGrey, containerMaxWidth, containerMinWidth, marginY
} from '../utils/static-value'
import MainTopic from '../components/main-topic'
import ProjectIndex from '../components/index/project'
import BlogIndex from '../components/index/blog'
import logo from "../images/icon.png"

const useStyle = makeStyles((theme) => ({
  container: {
    width: "80vw",
    [theme.breakpoints.up('md')]: {
      marginTop: marginY * 2,
      marginBottom: marginY * 2,
      minWidth: containerMinWidth,
      maxWidth: containerMaxWidth
    }

  },
  section1Content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.up('md')]: {
      marginTop: marginY * 2,
      marginBottom: marginY * 2,
      flexDirection: "row-reverse",
      justifyContent: "space-around"
    }
  },
  topShape: {
    backgroundColor: pink,
    width: "100%",
    height: 50,
    clipPath: "polygon(0% 0%, 0% 100%,100% 0%)",
    transform: 'translateY(-1px)'
  },
  section1Img: {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    width: 240,
    height: 240,
    [theme.breakpoints.up('md')]: {
      width: 300,
      height: 300
    }
  },
  section1Word: {
    marginTop: marginY,
    [theme.breakpoints.up('md')]: {
      width: "50%",
    }
  },
  section1WordH1: {
    color: blue
  },
  section1WordH2: {
    marginTop: marginY,
    marginBottom: marginY,
    color: brightGrey
  },
  section2: {
  },
  section3: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  blogContainer: {
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-around',
      flexDirection: 'row',
    }
  }
}))

const IndexPage = () => {
  const classes = useStyle()

  return (
    <Layout>
      <SEO title="主頁" />
      <Box>
        <Box>
          <Grid style={{ backgroundColor: pink }} container justify="center">
            <Box className={classes.container}>
              <Grid container direction="column" alignItems="center" >
                <Box className={classes.section1Content} direction="column" justify="space-between" alignItems="center" >
                  <Box className={classes.section1Img} />
                  <Box className={classes.section1Word}  >
                    <Typography className={classes.section1WordH1} variant='h1'>Hey! 我是Oscar.</Typography>
                    <Typography className={classes.section1WordH2} variant='h2'>我現在是Manulife的Python開發人員。我喜歡網頁開發和數據科學。不斷學習和探索新技術。</Typography>
                    <Link to="/blogs/0"><Btn id="blog" text='我的網誌' /></Link>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Box className={classes.topShape} />
        </Box>
        <Grid container direction="column" alignItems="center">
          <Box className={classes.container}>
            <Grid className={classes.section2} container direction="column" alignItems="center" >
              <MainTopic text="我的項目" />
              <ProjectIndex />
            </Grid>
            <Box className={classes.section3}>
              <MainTopic text="我的網誌" />
              <Box className={classes.blogContainer}>
                <BlogIndex />
              </Box>
              <Link to="/blogs/0"><Btn text='觀看更多' /></Link>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
}



export default IndexPage
