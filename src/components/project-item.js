import React from 'react';
import { Link } from 'gatsby'
import Btn from './btn';
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import { blue, grey, extraBrightGrey, marginY } from '../utils/static-value'
import Carousel from 'react-material-ui-carousel'

const ProjectItem = ({ project, haveBtn }) => {
    let { content, tags, title, images, url } = project

    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.up('md')]: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
            },
        },
        projectImageContainer: {
            width: "100%",
            height: "60vw",
            marginBottom: 40,
            maxWidth: 400,
            maxHeight: 270,
            borderRadius: 5,
            [theme.breakpoints.up('md')]: {
                width: "50%",
                height: "30vw",
                maxWidth: 600,
                maxHeight: 400,
            },
            backgroundColor: extraBrightGrey,
        },
        projectImage: {
            borderRadius: 2,
            position: "relative",
            top: "5%",
            left: "5%",
            backgroundPosition: "left",
            width: "90%",
            height: "100%",
        },
        iconBoxContainer: {
            marginBottom: marginY / 2,
            [theme.breakpoints.up('md')]: {
                width: 400
            },
        },
        iconBox: {
            width: 40,
            fontSize: 25
        },
        projectText: {
            [theme.breakpoints.up('md')]: {
                maxWidth: 400,
                width: "40%"
            },
        },
        projectTextH1: {
            color: blue,
            cursor: 'pointer',
        },
        projectTextH2: {
            color: grey,
            marginTop: marginY,
            marginBottom: marginY
        },
        projectTextH2Tag: {
            color: grey
        }
    }))
    let classes = useStyles()
    console.log(project)
    return (
        <Box className={classes.root} >
            <div style={{ backgroundImage: `url(${images[0]})`,width:"100px",height:"100px" }} >123</div>
            <Box className={classes.projectImageContainer}>
                <Carousel autoPlay={false} navButtonsAlwaysVisible={true} className={classes.projectImage}>
                    {images.map(image => <img key={image} style={{ position: "absolute", width: "100%", height: "100%" }} 
                    src={image} alt={image} />)}
                </Carousel>
            </Box>
            <Box className={classes.projectText}>
                <a href={url}><Typography variant="h1" className={classes.projectTextH1}>{title}</Typography></a>
                <Typography variant="h2" className={classes.projectTextH2}>{content}</Typography>
                {tags.map(tag => <Grid className={classes.iconBoxContainer} key={tag.name} container direction="row" alignItems="center">
                    <Grid container justify="center" className={classes.iconBox}><i className={tag.class} /></Grid>
                    <Typography variant="h2" className={classes.projectTextH2Tag}>{tag.name}</Typography>
                </Grid>)}
                {haveBtn ? <Link to="/projects/tag/all"><Btn marginTop={marginY} text="了解更多" /></Link> : null}
            </Box>
        </Box>
    );
};

export default ProjectItem;