import { Box, Grid } from '@material-ui/core';
import React from 'react';
import TitleSubtitle from '../components/title-subtitle';
import ProjectItem from '../components/project-item'
import { makeStyles } from '@material-ui/core/styles';
import { containerMaxWidth, containerMinWidth, marginY } from '../utils/static-value'
import Layout from '../components/layout'
import SEO from "../components/seo";
export default ({ pathContext }) => {
  const useStyle = makeStyles((theme) => ({
    container: {
      width: "80vw",
      [theme.breakpoints.up('md')]: {
        minWidth: containerMinWidth,
        maxWidth: containerMaxWidth
      }

    }
  }))
  const { projects, tags } = pathContext

  const classes = useStyle()

  return (
    <Layout>
    <SEO title="我的項目" />
      <Box>
        <TitleSubtitle type="projects" title={"我的項目"} subtitle={"在數據科學和網頁開發中遊走，透過開發項目提高興趣及技術"} tags={tags} />
        <Grid container direction="column" alignItems="center">
          <Box className={classes.container}>
            {projects.map(project => <Box key={`project_${project.id}`} style={{ marginBottom: marginY }}><ProjectItem project={project} /></Box>)} </Box>
        </Grid>
      </Box>
    </Layout>
  );
};