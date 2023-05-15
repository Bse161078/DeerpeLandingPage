import React from "react";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { useStyles } from "./style";
import Mockup1 from "../../../assets/Mockup1.png";
import BlogPic1 from "../../../assets/BlogPic1.png";
import BlogPic2 from "../../../assets/BlogPic2.png";
import BlogPic3 from "../../../assets/BlogPic3.png";
import BlogPic4 from "../../../assets/BlogPic4.png";
import BlogPic5 from "../../../assets/BlogPic5.png";
import BlogPic6 from "../../../assets/BlogPic6.png";
import Header from "../../header/Header";
import Workflow from "../../workFlow/Workflow";
import Footer from "../../footer/Footer";

function Blog() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Header />
        <Grid container>
          <Grid item xs={12} md={4} style={{ paddingTop: "10%" }}>
            <Typography variant="h3" color="white" style={{ fontWeight: "bold" }}>
              Blogs By{" "}
            </Typography>
            <Typography
              variant="h3"
              color="black"
              style={{ fontWeight: "bold" }}
              display="flex"
              paddingLeft="30%"
            >
              Deer{" "}
              <Typography
                variant="h3"
                color="white"
                style={{ fontWeight: "bold" }}
              >
                {" "}
                Pe
              </Typography>
            </Typography>{" "}
          </Grid>
          <Grid item xs={12} md={8} style={{ paddingTop: "10%" }}>
            <img src={Mockup1} className={classes.MockUp1Size}></img>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>

      <Grid container style={{ paddingTop: "5%" }}>
        <Grid item xs={6}>
          <img src={BlogPic1}  className={classes.blogPicSizes}></img>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left",paddingRight:"2%" }}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            MONEY TRANSFER
          </Typography>
          <Typography variant="body" >
            Fintech mobile apps have revolutionized money transfers, offering a
            fast, convenient, and secure way to send and receive money, pay
            bills, and split expenses. With continued advancements in
            technology, these apps will become even more sophisticated, further
            simplifying the process of transferring money{" "}
          </Typography>
          <br></br>

          <Button
            vairant="contained"
            style={{
              backgroundColor: " #D4AF37",
              color: "white",
              marginTop: "5%",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      <Grid container style={{ paddingTop: "15%", paddingLeft: "5%" }}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            VIRTUAL MASTER CARD
          </Typography>
          <Typography variant="body">
            The Naira Virtual Mastercard is a prepaid digital payment solution
            in Nigeria that offers secure and convenient transactions. Users can
            make purchases online without linking it to a bank account. It's
            accepted for digital services and international payments. The card
            provides a reliable way for Nigerians to make digital payments
            domestically and globally.
          </Typography>
          <br></br>

          <Button
            vairant="contained"
            style={{
              backgroundColor: " #D4AF37",
              color: "white",
              marginTop: "5%",
            }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={BlogPic2}  className={classes.blogPicSizes}></img>
        </Grid>
      </Grid>

      <Grid container style={{ paddingTop: "15%" }}>
        <Grid item xs={6}>
          <img src={BlogPic3}  className={classes.blogPicSizes}></img>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left", paddingRight:"2%" }}>
          <Typography variant="h4" style={{ fontWeight: "bold" }} >
            FLIGHTS BOOKING
          </Typography>
          <Typography variant="body"  >
            Deerpe is a popular online platform for quick and easy flight
            booking. It offers a range of travel-related services, including
            hotel bookings and car rentals. With a user-friendly interface and
            24/7 customer support, Deerpe simplifies the booking process and
            ensures a hassle-free experience for travelers.
          </Typography>
          <br></br>

          <Button
            vairant="contained"
            style={{
              backgroundColor: " #D4AF37",
              color: "white",
              marginTop: "5%",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      <Grid container style={{ paddingTop: "15%", paddingLeft: "5%" }}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            TRANSPORT BOOKING
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
          <br></br>

          <Button
            vairant="contained"
            style={{
              backgroundColor: " #D4AF37",
              color: "white",
              marginTop: "5%",
            }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={BlogPic4}  className={classes.blogPicSizes}></img>
        </Grid>
      </Grid>

      <Grid container style={{ paddingTop: "15%", paddingLeft: "3%" }}>
        <Grid item xs={5} md={6}>
          <img src={BlogPic5}  className={classes.blogPicSize2}></img>
        </Grid>
        <Grid item xs={7} md={6}style={{ textAlign: "left" ,paddingRight:"2%" }}>
          <Typography variant="h4" style={{ fontWeight: "bold" , marginRight:"5%" }}>
            E-COMMERCE
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
          <br></br>

          <Button
            vairant="contained"
            style={{
              backgroundColor: " #D4AF37",
              color: "white",
              marginTop: "5%",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
      <Grid container style={{ paddingTop: "15%", paddingLeft: "5%" }}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            PAY WITH SOUNDBOX
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
          <br></br>

          <Button
            vairant="contained"
            style={{
              backgroundColor: " #D4AF37",
              color: "white",
              marginTop: "5%",
            }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={BlogPic6}  className={classes.blogPicSizes}></img>
        </Grid>
      </Grid>
      <Workflow />
      <Footer />
    </>
  );
}

export default Blog;
