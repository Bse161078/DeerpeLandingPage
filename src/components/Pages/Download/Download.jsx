import React from "react";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { useStyles } from "./style";
import Header from "../../header/Header";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@material-ui/icons/Apple";
import GlaxyNote from "../../../assets/GalaxyNote.png";
import Workflow from "../../workFlow/Workflow";
import Footer from "../../footer/Footer";
import QRCode from "qrcode.react";

function Download() {
  const classes = useStyles();
  const text = "https://www.example.com";
  return (
    <>
      <Box className={classes.root}>
        <Header />

        <Grid container sx={{ paddingTop: "3%", display: "flex" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", color: "white" }}
              padding={{xs:"5%"}}
            >
              Download by Scanning
            </Typography>
            <Box style={{ paddingTop: "5%" , }}>
              <QRCode value={text} className={classes.QRCodePos} />
            </Box>
            <Box
              sx={{ display: "flex", paddingTop: "3%" }}
              paddingLeft={{ xs: " 8%", md: "20%" }}
            >
              <Box className={classes.AppleStorebtn}>
                <Button
                  variant="contained"
                  startIcon={<AppleIcon />}
                  size="medium"
                  sx={{ backgroundColor: "black", borderRadius: "10px" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ background: "white" }}
                    />
                    <Box ml={1}>Apple Store</Box>
                  </Box>
                </Button>
              </Box>
              <Box
                className={classes.PlayStorebtn}
                style={{ marginLeft: "3%" }}
              >
                <Button
                  variant="contained"
                  startIcon={<ShopIcon />}
                  size="medium"
                  sx={{ backgroundColor: "black", borderRadius: "10px" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ background: "white" }}
                    />
                    <Box ml={2}>Play Store</Box>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={GlaxyNote} className={classes.GlaxyNoteSize}></img>
          </Grid>
        </Grid>
      </Box>
      <Workflow />
      <Footer />
    </>
  );
}

export default Download;
