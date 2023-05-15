import React from "react";
import { useStyles } from "./style";
import Header from "../header/Header";
import { Box, Grid, Typography, Divider, Button, useMediaQuery } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";

import { useTheme } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import GlaxyNote from "../../assets/GalaxyNote.png";

import Wave from "react-wavify";

function Hero() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box className={classes.root}>
        <Header />
        <Grid container sx={{ paddingTop: "3%", display: "flex" }}>
          <Grid item xs={12} md={6} paddingRight={{ xs: "10%" }}>
            <Typography
              variant={isSmallScreen ? "h5" : "h4"}
              sx={{
                textAlign: "left",
              paddingLeft:"15%",
                fontWeight: "bold",
                color: "white",
              }}
             
            >
              Say Goodbye To Long{" "}
            </Typography>
            <Typography
              variant={ isSmallScreen? "h5":"h4"}
              sx={{
                textAlign: "left",
                paddingLeft: "15%",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Queues And Waiting{" "}
            </Typography>
            <Typography
                 variant={ isSmallScreen? "h5":"h4"}
              sx={{
                textAlign: "left",
                paddingLeft: "15%",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Times
            </Typography>
        { !isSmallScreen &&  (<Box style={{ display: "flex" }}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  paddingLeft: "15%",
                  fontWeight: "bold",
                  color: "white",
                  paddingTop: "3%",
                }}
              >
                Pay for your purchases with
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  display: "flex",
              
                
                }}
                paddingTop={{xs:"9%", md:"1%"}}
                paddingLeft={{md:"1%"}}
              >
                Deer
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "white" }}
                >
                  Pe
                </Typography>
              </Typography>
            </Box>)
}

{ isSmallScreen &&  (<Box style={{ display: "flex",flexDirection: "row" }}>
  <Typography
    variant="h6"
    sx={{
      textAlign: "left",
      paddingLeft: "15%",
      fontWeight: "bold",
      color: "white",
      paddingTop: "3%",
      
      
 
    }}
  >
    Pay for your purchases with{" "}
    <Typography
      variant="h4"
      component="span"
      sx={{
        fontWeight: "bold",
        color: "black",
        
        
      }}
    >
      Deer
      <Typography variant="h4" component="span" sx={{ fontWeight: "bold", color: "white" }}>
        Pe
      </Typography>
    </Typography>
  </Typography>
</Box>
)
}







            <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                paddingLeft: "15%",
                fontWeight: "bold",
                color: "white",
              }}
            >
              The fast and easy way to pay online!
            </Typography>

            <Box
              sx={{ display: "flex" }}
              paddingLeft={{ xs: "10%", md: "0%" }}
              marginTop={{ xs: "5%" }}
            >
              <Box className={classes.AppleStorebtn}>
                <Button
                  variant="contained"
                  startIcon={<AppleIcon />}
                  size={isSmallScreen? "small": "medium"}
                  sx={{ backgroundColor: "black", borderRadius: "10px" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ background: "white",
                    }}
                    />
                    <Box ml={1}>Apple Store</Box>
                  </Box>
                </Button>
              </Box>
              <Box className={classes.PlayStorebtn}>
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
          <Grid item xs={12} md={6} >
            <img src={GlaxyNote} className={classes.GlaxyNoteSize}></img>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Hero;
