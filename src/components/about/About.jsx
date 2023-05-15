import React from "react";
import { Box, Grid, Typography, Divider, Button, useMediaQuery, useTheme } from "@mui/material";
import { useStyles } from "./style";
import Header from "../header/Header";
import GlaxyNote from "../../assets/GalaxyNote.png";
import ThreePhones from '../../assets/ThreePhones.png'
import MoneyTransfer from '../../assets/MoneyTransfer.png';
import Recharge from '../../assets/Recharge.png'
import Shopping from '../../assets/Shopping.png'
import Ticket from '../../assets/Ticket.png'
import Footer from "../footer/Footer";

function About() {
  const theme=useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Header />
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "15%",
         
            
            }}
            paddingRight={{xs:"6%", md:"0%"}}
            paddingLeft={{xs:"12%", md:"5%"}}
          >
            <Typography
                            variant={isSmallScreen?"h4":"h3"}
              style={{ display: "flex", fontWeight: "bold", color: "white" }}
            
            >
              What is &nbsp;
              <Typography
                variant={isSmallScreen?"h4":"h3"}
                style={{ fontWeight: "bold", color: "black" }}
              >
                Deer
              </Typography>
              Pe?
            </Typography>
          </Grid>
          <Grid item  xs={12}
            md={6}>
            <img src={GlaxyNote} className={classes.GlaxyNoteSize}></img>
          </Grid>
        </Grid>
      </Box>

      <Grid container className={classes.root2}>
        <Grid item xs={12} md={6} >
          <Typography variant="h3" fontWeight="bold" paddingTop="8%">
            About DeerPe
          </Typography>
          <Box textAlign="left"  paddingLeft="10%" paddingTop="5%" paddingRight={{xs:"6%"}}>
          <Typography variant="bdoy"paddingTop="8%" >
            Deerpe is a versatile platform that offers a range of services,
            including Pay With Soundbox, E-Commerce, Transport Booking, Flights
            Booking, Virtual Mastercard, and Money Transfer. With Deerpe, you
            can easily manage your payments and bookings all in one place,
            making your life easier and more convenient. Our Pay With Soundbox
            feature enables you to make payments using sound waves, while our
            E-Commerce feature provides a seamless online shopping experience.
            With our Transport Booking feature, you can book and pay for
            transport services easily and conveniently, while our Flights
            Booking feature makes it easy to book your next flight.
            Additionally, our Virtual Mastercard and Money Transfer services
            allow you to send and receive money quickly and securely. With
            Deerpe, you have access to a wide range of services that can help
            simplify your life.
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}  marginLeft={{xs:"5%", md:"0%"}}  marginRight={{xs:"10%", md:"0%"}}>
            <img src={ThreePhones} className={classes.ThreePhonesSize} ></img>
        </Grid>
      </Grid>


      <Grid container paddingTop="8%" paddingBottom="8%">
    
          <Grid item xs={12} md={3} >
                <img src={MoneyTransfer}className={classes.gridSpacing} ></img>
                <Typography style={{fontWeight:"bold"}} paddingLeft={{ md:"10%"}} >Money Transfer</Typography>
                </Grid>
                <Grid item xs={12} md={3} >
                <img src={Recharge} className={classes.gridSpacing}></img>
                <Typography style={{fontWeight:"bold"}}  paddingLeft={{ md:"10%"}}>Recharge and Bill Payment</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                <img src={Ticket}className={classes.gridSpacing} ></img>
                <Typography style={{fontWeight:"bold"}}  paddingLeft={{ md:"10%"}}>Ticket Booking</Typography>
                </Grid>
                <Grid item xs={12} md={3} >
                <img src={Shopping} paddingLeft={{ md:"20%"}} className={classes.gridSpacing}></img>
                <Typography style={{fontWeight:"bold"}}  paddingLeft={{xs:"0%", md:"10%"}}>E-Commerce</Typography>
                </Grid>
            </Grid>
            <Footer/>
    </>
  );
}

export default About;
