import { Link } from "gatsby"
import { AppBar, IconButton, Toolbar, Typography, makeStyles, Button, Box, Tabs, Tab } from '@material-ui/core';
import React, { useState, useRef } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { pink, grey } from '../utils/static-value'

const useStyles = makeStyles((theme) => ({
  toolBarStyle: {
    justifyContent: "space-between",
    backgroundColor: pink
  },
  menuStyle: {
    cursor: "pointer",
    color: grey,
  },
  menuShortStyle: {
    [theme.breakpoints.up('md')]:
      { display: 'none' }
  },
  menuLongStyle: {
    [theme.breakpoints.down('sm')]:
      { display: 'none' },
    '& span': {
      [theme.breakpoints.up('lg')]:
        { fontSize: 20 },
    },
    color: grey
  },
  navPageStyle: {
    position: "absolute",
    display: "flex",
    transition: "all 0.5s",
    transformOrigin: "0 0",
    transform: "scaleY(0)",
    width: "100vw",
    height: "100vh",
    backgroundColor: pink,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  navPageItemsStyle: {
    alignItems: "space-between",
    display: "flex",
    height: "60%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hidden: {
    display: "none"
  }
}))


const Header = () => {
  const classes = useStyles()
  let navPageRef = useRef(null)
  let [isOpen, setIsOpen] = useState(false)

  const switchIsOpen = (e) => {
    setIsOpen(!isOpen)
    if (isOpen === false) {
      navPageRef.style.transform = 'scaleY(1)'
    } else {
      navPageRef.style.transform = 'scaleY(0)'
    }
  }
  let labelIndex = 0;
  const [value, setValue] = React.useState(labelIndex);

  const handleChange = (event, newValue) => {
    document.getElementById(newValue).click()
    setValue(newValue);
  };
  return (
    <Box>
      <AppBar style={{ position: "fixed" }} position="static">
        <Toolbar className={classes.toolBarStyle} >
          <Link to="/"><Typography className={classes.menuStyle} variant="h2">Oscar Yiu</Typography></Link>
          <IconButton className={classes.menuShortStyle} edge="end" color="inherit" aria-label="menu" onClick={switchIsOpen}>
            <MenuIcon className={classes.menuStyle} />
          </IconButton>
          <Tabs TabIndicatorProps={{
            style: {
              display: "none",
            }
          }} className={classes.menuLongStyle} onChange={handleChange} value={value}>
            <Tab label="關於" />
            <Tab label="網誌" />
            <Tab label="項目" />
            <Tab label="聯絡" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box style={{ position: "fixed" }} ref={el => navPageRef = el} className={classes.navPageStyle} onClick={switchIsOpen}>
        <Box className={classes.navPageItemsStyle}>
          <Button >
            <Link to="/"><Typography className={classes.menuStyle} variant="h2">關於</Typography></Link>
          </Button>
          <Button >
            <Link to="/blogs"><Typography className={classes.menuStyle} variant="h2">網誌</Typography></Link>
          </Button>
          <Button >
            <Link to="/projects"><Typography className={classes.menuStyle} variant="h2">項目</Typography></Link>
          </Button>
          <Button >
            <Link to="/contact"><Typography className={classes.menuStyle} variant="h2">聯絡</Typography></Link>
          </Button>
        </Box>
      </Box>
      <Link id="0" to="/" />
      <Link id="1" to="/blogs" />
      <Link id="2" to="/projects" />
      <Link id="3" to="/contact" />
    </Box>


  );
};

export default Header
