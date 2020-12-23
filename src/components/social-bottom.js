import React from 'react';
import { Link } from 'gatsby';
import { Grid, Box, makeStyles, Typography } from '@material-ui/core'
import { pink, grey, brightGrey, containerMaxWidth, containerMinWidth, marginY } from '../utils/static-value'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Btn from './btn'
const SocialBottom = ({ isContact }) => {
    const useStyles = makeStyles((theme) => ({
        reminders: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: marginY,
            height: 140,
            [theme.breakpoints.up('sm')]: {
                width: "50%",
            },
            [theme.breakpoints.up('md')]: {
                height: 200,
            }

        },
        socialNetwork: {
            "& div": {
                flexWrap: "nowrap"
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 150,
            [theme.breakpoints.up('md')]: {
                height: 200,
            }
        },
        iconBox: {
            fontSize: 25,
            width: 35,
            [theme.breakpoints.up('md')]: {
                width: 45,
                fontSize: 30,
            }
        },
        shape: {
            backgroundColor: pink,
            width: "100%",
            height: 50,
            clipPath: "polygon(0% 100%, 100% 100%,100% 0%)",
            transform: 'translateY(1px)'
        },
        content: {
            marginTop: marginY,
            marginBottom: marginY,
            flexWrap: "none",
            [theme.breakpoints.up('sm')]: {
                display: "flex",
                justifyContent: isContact ? "flex-end" : "space-between",
            },
            [theme.breakpoints.up('md')]: {
                justifyContent: isContact ? "flex-end" : "space - around",
            }
        },
        container: {
            width: "80vw",
            [theme.breakpoints.up('sm')]: {
                marginTop: marginY * 2,
                marginBottom: marginY * 2,
            },
            [theme.breakpoints.up('md')]: {
                marginTop: marginY * 3,
                marginBottom: marginY * 3,
                minWidth: containerMinWidth,
                maxWidth: containerMaxWidth
            }
        }
    }))
    let classes = useStyles()
    return (
        <Box>
        <div style={{ overflow: "hidden", width: 728, height: 90, position: "relative", margin: "auto", marginTop:20, maxWidth:"100%"}}>
              <a href="https://ethereumads.com" target="_new">Earn cryptocurrency with banner ads</a>
              <a href="https://ethereumads.com/link?address=0xe131C74eBb4f11E28DA060967FDeeb454b909206&slot=0&width=728&height=90">
                <img alt="Earn cryptocurrency with EthereumAds" src="https://ethereumads.com/media?address=0xe131C74eBb4f11E28DA060967FDeeb454b909206&slot=0&width=728&height=90" style={{ position: "absolute", top: 0, left: 0, margin: 0 }} />
              </a>
            </div>
            <Box className={classes.shape} />
            <Grid style={{ backgroundColor: pink }} container direction="column" alignItems="center" justify="center">
                <Box className={classes.container}>
                    <Box className={classes.content} >
                        {isContact ? null : <Box className={classes.reminders} > <Typography style={{ color: brightGrey, fontWeight: "300" }} variant="h1">有任何問題</Typography>
                            <Typography style={{ color: grey, fontWeight: "300" }} variant="h1">歡迎聯絡我們<span aria-label="thanks" role="img">👏</span></Typography>
                            <Link to="/contact"><Btn text="按此留言" /></Link></Box>}
                        <Box className={classes.socialNetwork}>
                            <Grid container alignItems="center"><Box className={classes.iconBox}>
                            <MailOutlineIcon/>
                            </Box><Typography style={{ color: grey, fontWeight: "300" }} component="a"  variant="h3">oscaryiu.lapsang@gmail.com</Typography></Grid>
                            <Grid container alignItems="center"><Box className={classes.iconBox}>
                            <InstagramIcon /></Box><Typography style={{ color: grey, fontWeight: "300" }} component="a" href="https://www.linkedin.com/in/oscar-yiu-a90b4a186/" variant="h3">Oscar Yiu</Typography></Grid>
                            <Grid container alignItems="center"><Box className={classes.iconBox}>
                            <LinkedInIcon /></Box><Typography style={{ color: grey, fontWeight: "300" }} component="a" href="https://www.instagram.com/0scaryiu/" variant="h3">0scaryiu</Typography></Grid>
                            <Grid container alignItems="center"><Box className={classes.iconBox}>
                            <GitHubIcon /></Box><Typography style={{ color: grey, fontWeight: "300" }} component="a" href="https://github.com/15077693d" variant="h3">15077693d</Typography></Grid></Box>
                    </Box>
                </Box>
            </Grid>
        </Box>
    )
};

export default SocialBottom;