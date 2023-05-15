import React from "react";
import { useStyles } from "./style";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DeerPe from "../../assets/DeerPe.png";

export default function Footer() {
  const classes = useStyles();
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Features", link: "/features" },
    { text: "About", link: "/about" },
    { text: "Contact Us", link: "/contactUs" },
    { text: "Blog", link: "/blog" },
    { text: "Download", link: "/download" },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isSmallScreen ? (
        <footer className={classes.footer}>
          <Container maxWidth="lg">
            <Grid container spacing={7}>
              <Grid item xs={12} md={6}>
                <img src={DeerPe}></img>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box className={classes.alignment}>
                  {menuItems.map((item) => (
                    <a
                      className={classes.quickLink}
                      key={item.text}
                      href={item.link}
                    >
                      <Typography gutterBottom>{item.text}</Typography>
                    </a>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box className={classes.alignment}>
                  <Typography
                    component="a"
                    href="https://www.facebook.com/"
                    style={{ color: "black", textDecoration: "none" }}
                    gutterBottom
                  >
                    Facebook
                  </Typography>

                  <Typography
                    component="a"
                    href="https://twitter.com/"
                    style={{ color: "black", textDecoration: "none" }}
                    gutterBottom
                  >
                    Twitter
                  </Typography>

                  <Typography
                    component="a"
                    href="https://www.linkedin.com/"
                    style={{ color: "black", textDecoration: "none" }}
                    gutterBottom
                  >
                    Linkedin
                  </Typography>

                  <Typography
                    component="a"
                    href="https://www.instagram.com/"
                    style={{ color: "black", textDecoration: "none" }}
                    gutterBottom
                  >
                    Instagram
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </footer>
      ) : (
        <footer className={classes.footer}>
          <Container maxWidth="lg">
            <Grid container spacing={7}>
              <Grid item xs={12} md={3}>
                <img src={DeerPe}></img>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body" style={{ color: "black" }}>
                  A21 ground floor Khairat Plaza Rijiyar Zaki Opp. NYSC Sect.
                  Gwarzo Road, Kano State, Nigeria.
                </Typography>
                <br></br>
                <Box style={{ paddingTop: "20%" }}>
                  <Typography
                    variant="body"
                    style={{ color: "black", paddingTop: "20%" }}
                  >
                    +234 700 001 8312
                  </Typography>
                </Box>
                <br></br>
                <Typography
                  variant="body"
                  style={{ color: "black", paddingTop: "20%" }}
                >
                  Info@deerpe.com
                </Typography>
                <br></br>
                <Typography
                  variant="body"
                  style={{ color: "black", paddingTop: "20%" }}
                >
                  Fax. 7000018312
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box style={{ textAlign: "left", color: "black" }}>
                  {menuItems.map((item) => (
                    <a
                      className={classes.quickLink}
                      key={item.text}
                      href={item.link}
                    >
                      <Typography gutterBottom>{item.text}</Typography>
                    </a>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box style={{ textAlign: "left", color: "black" }}>
                  <Box className={classes.alignment}>
                    <Typography
                      component="a"
                      href="https://www.facebook.com/"
                      style={{ color: "black", textDecoration: "none" }}
                      gutterBottom
                    >
                      Facebook
                    </Typography>

                    <Typography
                      component="a"
                      href="https://twitter.com/"
                      style={{ color: "black", textDecoration: "none" }}
                      gutterBottom
                    >
                      Twitter
                    </Typography>

                    <Typography
                      component="a"
                      href="https://www.linkedin.com/"
                      style={{ color: "black", textDecoration: "none" }}
                      gutterBottom
                    >
                      Linkedin
                    </Typography>

                    <Typography
                      component="a"
                      href="https://www.instagram.com/"
                      style={{ color: "black", textDecoration: "none" }}
                      gutterBottom
                    >
                      Instagram
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </footer>
      )}
    </>
  );
}
