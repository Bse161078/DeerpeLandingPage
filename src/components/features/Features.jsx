import React from "react";
import { Box, Grid, Typography, Divider, Button,useMediaQuery } from "@mui/material";

import { useStyles } from "./style";
import Header from "../header/Header";
import Mockup1 from "../../assets/Mockup1.png";
import note from "../../assets/Note.png";
import card from "../../assets/card.png";
import flightBooking from "../../assets/flightBooking.png";
import transportBooking from "../../assets/transportBooking.png";
import soundBox from "../../assets/soundBox.png";
import Ecommerce from "../../assets/Ecommerce.png";
import TwoIphones from "../../assets/TwoIphones.png";
import virtualMasterCard from "../../assets/virtualMasterCard.png";
import flightMockup from "../../assets/flightMockup.png";
import transportMockup from "../../assets/transportMockup.png";
import EcommerceMockup from "../../assets/EcommerceMockup.png";
import Workflow from "./../workFlow/Workflow";
import Footer from "./../footer/Footer";
import digitalMeter from "../../assets/digitalMeter.png";
import battery from "../../assets/battery.png";
import loudSound from "../../assets/loudSound.png";
import wirless from "../../assets/wireless.png";



import { useTheme } from '@mui/material/styles';

function Features() {
  const theme=useTheme();
  const isSmallScreen=useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
        </Grid>
        <Grid container paddingTop="5%" className={classes.title}>
          
          <Grid item xs={12} md={12} display='flex'  >
            <Typography
              variant={isSmallScreen?"h5":"h4"}
              style={{
                display: "flex",
                fontWeight: "bold",
                paddingLeft: "6%",
              
             
              }}
            >
              
              Features 
              </Typography>
              <Typography
              variant={isSmallScreen?"h5":"h4"}
                style={{ fontWeight: "bold", color: "white", display:'flex',  paddingLeft: "2%"}}
              >
                Deer <Typography  variant={isSmallScreen?"h5":"h4"}
                style={{ fontWeight: "bold", color: "black" }}>Pe</Typography>
              </Typography>{" "}
              <Typography   variant={isSmallScreen?"h5":"h4"}
                fontWeight= "bold"
                paddingLeft= "2%">Offers</Typography>
             
            
          </Grid>
          
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              style={{ display: "flex", paddingLeft: "10%", paddingTop: "4%" }}
            >
              <img src={note} width={{sm:"5%", md:"8%"}} height="8%"></img>
              <Typography  variant={isSmallScreen?"h6":"h5"} style={{ fontWeight: "bold" , paddingLeft:"3%"}}>
                Money Transfer
              </Typography>
              <br />
            </Box>
            <Box
              style={{ display: "flex", paddingLeft: "10%", paddingTop: "3%" }}
            >
              <img src={card} width={{sm:"5%", md:"8%"}} height="8%"></img>
              <Typography variant={isSmallScreen?"h6":"h5"} style={{ fontWeight: "bold", paddingLeft:"3%" }}>
                Virtual Master Card
              </Typography>
              <br />
            </Box>
            <Box
              style={{ display: "flex", paddingLeft: "10%", paddingTop: "3%" }}
            >
              <img src={flightBooking} width={{sm:"10%", md:"8%"}} height="9%" style={{marginTop:"1%"}}></img>
              <Typography variant={isSmallScreen?"h6":"h5"} style={{ fontWeight: "bold", paddingLeft:"3%" }}>
                Flights Booking
              </Typography>
              <br />
            </Box>
            <Box
              style={{ display: "flex", paddingLeft: "10%", paddingTop: "3%" }}
            >
              <img src={transportBooking}  width={{sm:"10%", md:"8%"}} height="8%"></img>
              <Typography variant={isSmallScreen?"h6":"h5"} style={{ fontWeight: "bold", paddingLeft:"3%" }}>
                Transport Booking
              </Typography>
              <br />
            </Box>
            <Box
              style={{ display: "flex", paddingLeft: "10%", paddingTop: "3%" }}
            >
              <img src={Ecommerce} ></img>
              <Typography variant={isSmallScreen?"h6":"h5"} style={{ fontWeight: "bold", paddingLeft:"3%" }}>
                E-Commerce
              </Typography>
              <br />
            </Box>
            <Box
              style={{ display: "flex", paddingLeft: "10%", paddingTop: "3%", }}
            >
              <img src={soundBox}  width={{ md:"6%"}} height="8%" style={{marginLeft:"2%", marginTop:"1%"}} ></img>
              <Typography variant={isSmallScreen?"h6":"h5"} style={{ fontWeight: "bold", marginLeft:"4%"}} paddingRight={{md:"5%"}}>
                Pay with Soundbox
              </Typography>
              <br />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} >
            <img src={Mockup1} className={classes.MockUp1Size}></img>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid item xs={12} md={6} paddingLeft={{ xs: "10%", md: "5%" }}>
          <img src={TwoIphones} className={classes.twoPhoneSize}></img>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            textAlign: "left",
          }}
          paddingLeft={{ xs: "20%", md: "5%" }}
          paddingRight={{ xs: "15%", md: "5%" }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",

              paddingBottom: "5%",
            }}
            paddingTop={{ md: "20%" }}
          >
            Money Transfer
          </Typography>
          <Typography variant="body">
            Fintech mobile apps have revolutionized money transfers, offering a
            fast, convenienttt, and secure way to send and receive money, pay
            bills, and split expenses. With continued advancements in
            technology, these apps will become even more sophisticated, further
            simplifying the process of transferring money
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            textAlign: "left",
          }}
          paddingLeft={{ xs: "20%", md: "5%" }}
          paddingRight={{ xs: "15%", md: "5%" }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              paddingTop: "20%",
              paddingBottom: "5%",
            }}
          >
            Virtual Master Card
          </Typography>
          <Typography variant="body">
            The Naira Virtual Mastercard is a prepaid digital payment solution
            in Nigeria that offers secure and convenient transactions. Users can
            make purchases online without linking it to a bank account. It's
            accepted for digital services and international payments. The card
            provides a reliable way for Nigerians to make digital payments
            domestically and globally.
          </Typography>
        </Grid>
        <Grid item xs={6} paddingLeft={{ xs: "10%", md: "5%" }}>
          <img src={virtualMasterCard} className={classes.mockUpSize2}></img>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6} paddingLeft={{ xs: "20%", md: "5%" }}>
          <img src={flightMockup} className={classes.mockUpSize2}></img>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            textAlign: "left",
          }}
          paddingLeft={{ xs: "20%", md: "5%" }}
          paddingRight={{ xs: "15%", md: "5%" }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",

              paddingBottom: "5%",
            }}
            paddingTop={{ md: "20%" }}
          >
            Flights Booking
          </Typography>
          <Typography variant="body">
            Deerpe is a popular online platform for quick and easy flight
            booking. It offers a range of travel-related services, including
            hotel bookings and car rentals. With a user-friendly interface and
            24/7 customer support, Deerpe simplifies the booking process and
            ensures a hassle-free experience for travelers.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            textAlign: "left",
          }}
          paddingLeft={{ xs: "20%", md: "5%" }}
          paddingRight={{ xs: "15%", md: "5%" }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              paddingTop: "20%",
              paddingBottom: "5%",
            }}
          >
            Transport Booking
          </Typography>
          <Typography variant="body">
            Deerpe is an all-in-one travel booking app that simplifies the
            process of booking transport tickets. With a user-friendly
            interface, users can easily search for and compare bus, train, or
            ferry options and book their preferred choice. The app provides
            real-time updates on departure and arrival times for added
            convenience. Deerpe's customer service team is also available 24/7
            to assist users with any queries or issues they may encounter during
            the booking process.
          </Typography>
        </Grid>
        <Grid item xs={6} paddingLeft={{ xs: "8%", md: "5%" }}>
          <img src={transportMockup} className={classes.mockUpSize2}></img>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6} paddingLeft={{ xs: "8%", md: "5%" }}>
          <img src={EcommerceMockup} className={classes.mockUpSize2}></img>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            textAlign: "left",
          }}
          paddingLeft={{ xs: "20%", md: "5%" }}
          paddingRight={{ xs: "15%", md: "5%" }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",

              paddingBottom: "5%",
            }}
            paddingTop={{ md: "20%" }}
          >
            Ecommerce
          </Typography>
          <Typography variant="body">
            Deerpe is a user-friendly travel booking app that simplifies the
            process of booking transport tickets. With options for bus, train,
            and ferry tickets, users can search, compare, and book their
            preferred option quickly and easily. Real-time updates on departure
            and arrival times are provided, and 24/7 customer support is
            available for any queries or issues that may arise during the
            booking process.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            textAlign: "left",
          }}
          paddingLeft={{ xs: "20%", md: "5%" }}
          paddingRight={{ xs: "15%", md: "5%" }}
        >
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              paddingTop: "20%",
              paddingBottom: "5%",
            }}
          >
            Pay with Soundbox
          </Typography>
          <Typography variant="body">
            SoundBox is a payment solution that allows customers to pay for
            goods and services using sound waves. This technology uses
            ultrasonic sound waves emitted by a customer's smartphone to
            transmit payment data to the merchant's device. Customers can make
            payments without the need for cash, cards, or even internet
            connectivity, as long as their device can emit sound waves. The
            payment process is secure and convenient, with no need for customers
            to enter personal or payment details. SoundBox is being adopted by
            merchants in various industries, including retail, hospitality, and
            transportation, as it offers a seamless and efficient payment
            experience for customers.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} paddingBottom={{ xs: "30%" }}>
          <Grid
            container
            className={classes.blurEffectPic}
            paddingLeft={{ xs: "20%", md: "5%" }}
            paddingRight={{xs:"15%",md:"5%"}}
          
          >
            <Grid item xs={6} style={{ paddingTop: "10%" }}>
              <Typography style={{ fontWeight: "bold" }}>
                Scan and Pay with Wireless Connectivity
              </Typography>
              <img src={wirless} className={classes.soundBoxPicsSize}></img>
              <Typography style={{ fontWeight: "bold" }}>
                Digital Meter for Payment View
              </Typography>
              <img src={digitalMeter} className={classes.soundBoxPicsSize}></img>
            </Grid>

            <Grid item xs={6} style={{ paddingTop: "20%", paddingLeft:"3%" }} >
              <Typography style={{ fontWeight: "bold" }}>
                Loud & Clear Verification Sound
              </Typography>
              <img src={loudSound} className={classes.soundBoxPicsSize}></img>
              <Typography style={{ fontWeight: "bold" }}>
                3000 MAH Long Battery Life
              </Typography>
              <img src={battery} className={classes.soundBoxPicsSize}></img>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Workflow/>
      <Footer />
    </>
  );
}

export default Features;
