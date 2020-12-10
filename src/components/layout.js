/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider, createMuiTheme, Box } from '@material-ui/core';
import Header from "./header"
import SocialBottom from './social-bottom'
import { pink } from '../utils/static-value'
const defaultTheme = createMuiTheme()
const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 550,
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 50
      }
    },
    h2: {
      lineHeight: "30px",
      fontSize: 20,
      fontWeight: 300,
      [defaultTheme.breakpoints.up('md')]: {
        lineHeight: "40px",
        fontSize: 25
      }
    },
    h3: {
      lineHeight: "25px",
      fontSize: 15,
      fontWeight: 300,
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: 20
      }
    }
  }
})

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
       <Header />
       <Box style={{ height: "80px", width: "100vw", backgroundColor: pink }} />
      {children}
      <SocialBottom />
    </ThemeProvider>
  )
}


export default Layout
