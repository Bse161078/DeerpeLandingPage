import React, { useState } from "react";
import { useStyles } from "./style";
import {
  AppBar,
  Toolbar,

  IconButton,
  
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation} from "react-router-dom";

import { List, ListItem, Drawer, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/logo.png";

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
const location = useLocation(); 

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOnClick = (item) => {
    setOpenDrawer(false);
  };

  const menuItems = [
    { text: "Home", link: "/"},
    { text: "Features", link: "/features"},
    { text: "About" , link: "/about"},
    { text: "Contact Us", link: "/contactUs"},
    { text: "Blog", link:"/blog" },
    {text : "Download", link:"/download"}
  ];

  const activeLinkStyle = {
    textDecoration: "underline",
    fontSize: "18px",
  };

  return (
    <>
      <div position="static" >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Grid container >
            <Grid item xs={4} md={4}>
              <img src={logo} className={classes.logo}></img>
            </Grid>
            <Grid item md={8}  >
              <Box className={classes.navLinkAlign}>
              {!isSmallScreen &&
                menuItems.map((item) => (
                  <Link
                    className={classes.navLink2}
                    key={item.text}
                  
                    to={item.link}
                    style={location.pathname === item.link ? activeLinkStyle : null} 
                  >
                    {item.text}
                  </Link>
                ))}
                </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
      {isSmallScreen && (
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem key={index}>
                  <Link
                    className={classes.navLink}
                    color="black"
                    to={item.link}
                    style={location.pathname === item.link ? activeLinkStyle : null} // apply underline style only to active link
                    onClick={handleOnClick}
                  >
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      )}
    </>
  );
}
