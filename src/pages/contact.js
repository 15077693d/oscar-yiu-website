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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const handleSubmit = (e) => {
        function encode(data) {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&")
          }
        
        e.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": e.target.getAttribute("name"),
              name,email,content
            })
          }).then(() => console.log("Thank!")).catch(error => alert(error))

    }
    return (
        <Layout>
            <TitleSubtitle title={"聯絡我們"} subtitle={"你的留言會電郵到我的電子郵箱，我們會在一至兩日內回覆。"} tags={[]} />
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <Grid container direction="column" alignItems="center">
                    <Box className={classes.container}>
                        <Grid container direction="row" justify="space-between">
                            <TextField label="稱呼" variant="outlined" style={{ width: "45%" }} onChange={e => setName(e.target.value)} value={name} required />
                            <TextField type="email" label="電郵地址" variant="outlined" style={{ width: "50%" }} onChange={e => setEmail(e.target.value)} value={email} required />
                        </Grid>
                        <TextField multiline={true} style={{ marginTop: marginY, width: "100%" }}
                            inputProps={{
                                style: {
                                    height: "20vh",
                                    width: "100%"
                                },
                            }} label="你的留言" variant="outlined" onChange={e => setContent(e.target.value)} value={content} required />
                    </Box>
                    <Btn text="確定" isSubmit={true} />
                </Grid>
            </form>
        </Layout>
    );
};

export default Contact;