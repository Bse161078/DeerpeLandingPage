import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./style";
import { Grid } from "@material-ui/core";
import meter from "../../assets/meter.png";
import Verify from "../../assets/Verify.png";
import TopUp from "../../assets/TopUp.png";
import dollar from "../../assets/dollar.png";

function Workflow() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} sx={{ marginTop: "8%" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", paddingTop: "4%" }}
        >
          How to get your
        </Typography>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          DeerPe App
        </Typography>
        <Typography variant="h6">
          Set up and start spending with confidence
        </Typography>

        <Grid
          container
          style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "15%" }}
       
        >
          <Grid item xs={12} md={3} >
            <img src={meter} style={{marginLeft:"10%"}}></img>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                paddingLeft: "8%",
                paddingTop: "4%",
              }}
            >
              1. Register
            </Typography>
            <Typography variant="body">
              Download the DeerPe app and &nbsp;
            </Typography>
            <Typography variant="body" >sign up in a few easy steps</Typography>
          </Grid>
          
          <Grid item xs={12} md={3} className={classes.gridSpacing} >
            <img src={Verify} style={{marginLeft:"10%"}}></img>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", paddingLeft: "8%" }}
            >
              2. Verify
            </Typography>
            <Typography variant="body" style={{ paddingLeft: "6%" }}>
              Confirm your identity with &nbsp;
            </Typography>
            <Typography variant="body">ID or passport</Typography>
          </Grid>
        
          <Grid item xs={12} md={3}   className={classes.gridSpacing}>
            <img src={TopUp} style={{marginLeft:"10%"}}></img>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", paddingLeft: "8%" }}
            >
              3. Top up
            </Typography>
            <Typography variant="body" style={{ paddingLeft: "6%" }}>
              Load your app using a wide &nbsp;
            </Typography>
            <Typography variant="body">range of top-up options</Typography>
          </Grid>
             
          <Grid item xs={12} md={3}  className={classes.gridSpacing}>
            <img src={dollar}  style={{marginLeft:"10%"}}></img>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", paddingLeft: "8%" }}
            >
              4. Spend
            </Typography>
            <Typography variant="body" style={{ paddingLeft: "6%" }}>
              Start using your virtual&nbsp;
            </Typography>
            <Typography variant="body">
              Mastercard for your everyday spending
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Workflow;
