import { Box, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import TitleSubtitle from '../components/title-subtitle';
import SocialBottom from '../components/social-bottom'
import { makeStyles } from '@material-ui/core/styles';
import Btn from '../components/btn'
import { containerMaxWidth, containerMinWidth, marginY } from '../utils/static-value'
import Layout from '../components/layout'
const Contact = () => {
    const useStyle = makeStyles((theme) => ({
        container: {
            width: "80vw",
            marginBottom: marginY,
            [theme.breakpoints.up('md')]: {
                minWidth: containerMinWidth - 800,
                maxWidth: containerMaxWidth - 800
            },
        }
    }))
    const classes = useStyle()
    return (
        <Layout>
            <TitleSubtitle title={"聯絡我們"} subtitle={"你的留言會電郵到我的電子郵箱，我們會在一至兩日內回覆。"} tags={[]} />
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Grid container direction="column" alignItems="center">
                    <Box className={classes.container}>
                        <Grid container direction="row" justify="space-between">
                            <TextField name="name" label="稱呼" variant="outlined" style={{ width: "45%" }}  required />
                            <TextField name="email" type="email" label="電郵地址" variant="outlined" style={{ width: "50%" }}  required />
                        </Grid>
                        <TextField name="content" multiline={true} style={{ marginTop: marginY, width: "100%" }}
                            inputProps={{
                                style: {
                                    height: "20vh",
                                    width: "100%"
                                },
                            }} label="你的留言" variant="outlined" required />
                    </Box>
                    <Btn text="確定" isSubmit={true} />
                </Grid>
            </form>
        </Layout>
    );
};

export default Contact;