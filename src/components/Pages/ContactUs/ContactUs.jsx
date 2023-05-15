import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import Header from "../../header/Header";
import { useStyles } from "./style";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useTheme } from "@mui/material/styles";
function ContactUs() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!isSmallScreen && (
        <Box className={classes.root}>
          <Header />

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" color="white" fontWeight="bold">
                Contact Us
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              paddingLeft={{ xs: "10%", md: "0%" }}
              paddingRight={{ xs: "10%", md: "0%" }}
            >
              <Typography variant="h6" color="white" fontWeight="bold">
                Any question or remarks? Just write us a message!
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={11} md={12} className={classes.whiteBox}>
              <Grid container>
                <Grid item xs={7} md={5} className={classes.coloredBox}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                      paddingTop: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Grid container>
                    <Typography
                      variant="body"
                      sx={{ color: "white", paddingLeft: "10%" }}
                    >
                      Say something to live chat!
                    </Typography>
                  </Grid>

                  <Typography
                    style={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingTop: "30%",
                    }}
                  >
                    <PhoneIcon style={{ marginRight: "8px" }} /> +234 700 001
                    8312
                  </Typography>

                  <Typography
                    style={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                      display: "flex",
                    }}
                  >
                    <EmailIcon style={{ marginRight: "10px" }} />{" "}
                    Info@deerpe.com
                  </Typography>

                  <Typography
                    style={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                    }}
                  >
                    <LocationOnIcon style={{ marginRight: "10px" }} /> A21
                    ground floor Khairat Plaza Rijiyar Zaki Opp. NYSC Sect.
                    Gwarzo Road, Kano State, Nigeria.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={5}
                  md={7}
                  style={{ textAlign: "left", paddingLeft: "5%" }}
                >
                  <FormControl variant="standard">
                    <br></br>
                    <InputLabel htmlFor="component-simple">
                      First Name
                    </InputLabel>
                    <Input id="component-simple" />
                  </FormControl>
                  &nbsp; &nbsp; &nbsp;
                  <FormControl variant="standard">
                    <br></br>
                    <InputLabel htmlFor="component-simple">
                      Last Name
                    </InputLabel>
                    <Input id="component-simple" />
                  </FormControl>
                  <br></br> <br></br> <br></br> <br></br>
                  <FormControl variant="standard">
                    <br></br>
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input id="component-simple" />
                  </FormControl>
                  &nbsp; &nbsp; &nbsp;
                  <FormControl variant="standard">
                    <br></br>
                    <InputLabel htmlFor="component-simple">
                      Phone Number
                    </InputLabel>
                    <Input id="component-simple" />
                  </FormControl>
                  <br></br> <br></br> <br></br> <br></br>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Select Subject
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="General Inquiry"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="General Inquiry"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="General Inquiry"
                      />
                    </RadioGroup>
                  </FormControl>
                  <FormControl variant="standard">
                    <br></br>
                    <InputLabel htmlFor="component-simple">Message</InputLabel>
                    <Input id="component-simple" />
                    <Button
                      variant="contained"
                      size={isSmallScreen ? "small" : "medium"}
                      style={{ backgroundColor: "#D49737", marginTop: "3%" }}
                    >
                      Send
                    </Button>
                  </FormControl>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9128677066005!2d8.4656516!3d11.980530799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7f79cd980e5b%3A0x4a93dcd684256de2!2sKhairat%20Plaza!5e0!3m2!1sen!2sae!4v1683575871673!5m2!1sen!2sae"
                    width="470"
                    height="200"
                    style={{border:0, paddingTop:"5%"}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      )}

      {isSmallScreen && (
        <Box className={classes.root}>
          <Header />

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" color="white" fontWeight="bold">
                Contact Us
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              paddingLeft={{ xs: "10%", md: "0%" }}
              paddingRight={{ xs: "10%", md: "0%" }}
              paddingBottom={{ xs: "5%" }}
            >
              <Typography variant="h6" color="white" fontWeight="bold">
                Any question or remarks? Just write us a message!
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={11} md={12} className={classes.whiteBox}>
              <Grid container>
                <Grid item xs={12} md={5} className={classes.coloredBox}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingRight: "10%",
                      paddingTop: "10%",
                      fontWeight: "bold",
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Grid container>
                    <Typography
                      variant="body"
                      sx={{ color: "white", paddingLeft: "10%" }}
                    >
                      Say something to live chat!
                    </Typography>
                  </Grid>

                  <Typography
                    style={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                    }}
                  >
                    <PhoneIcon style={{ marginRight: "8px" }} /> +234 700 001
                    8312
                  </Typography>

                  <Typography
                    style={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                      display: "flex",
                    }}
                  >
                    <EmailIcon style={{ marginRight: "10px" }} />{" "}
                    Info@deerpe.com
                  </Typography>

                  <Typography
                    style={{
                      color: "white",
                      paddingLeft: "10%",
                      paddingTop: "10%",
                    }}
                    paddingBottom={{ xs: "4%", md: "0%" }}
                  >
                    <LocationOnIcon style={{ marginRight: "10px" }} /> A21
                    ground floor Khairat Plaza Rijiyar Zaki Opp. NYSC Sect.
                    Gwarzo Road, Kano State, Nigeria.
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={7}
                  style={{ textAlign: "left", paddingLeft: "10%" }}
                >
                  <Box paddingLeft={{ xs: "15%", md: "0%" }}>
                    <FormControl variant="standard">
                      <br></br>
                      <InputLabel htmlFor="component-simple">
                        First Name
                      </InputLabel>
                      <Input id="component-simple" />
                    </FormControl>
                    <br></br>
                    <FormControl variant="standard">
                      <br></br> 
                      <InputLabel htmlFor="component-simple">
                        Last Name
                      </InputLabel>
                      <Input id="component-simple" />
                    </FormControl>
                    <br></br>
                    <FormControl variant="standard">
                      <br></br>
                      <InputLabel htmlFor="component-simple">Email</InputLabel>
                      <Input id="component-simple" />
                    </FormControl>
                    <br></br>
                    <FormControl variant="standard">
                      <br></br>
                      <InputLabel htmlFor="component-simple">
                        Phone Number
                      </InputLabel>
                      <Input id="component-simple" />
                    </FormControl>
                    <br></br> <br></br>
                    <FormControl >
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Select Subject
                      </FormLabel>
                      <RadioGroup
                        column
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                       
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="General Inquiry"
                        />
                                           
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="General Inquiry"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="General Inquiry"
                        />
                      </RadioGroup>
                    </FormControl>
                    <br></br>
                    <FormControl variant="standard">
                      <br></br>
                      <InputLabel htmlFor="component-simple">
                        Message
                      </InputLabel>
                      <Input id="component-simple" />
                      <Button
                        variant="contained"
                        size={isSmallScreen ? "small" : "medium"}
                        style={{ backgroundColor: "#D49737", marginTop: "3%" }}
                      >
                        Send
                      </Button>
                    </FormControl>
                   
                  </Box>
                  <Grid container >
                    <Grid item xs={12}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9128677066005!2d8.4656516!3d11.980530799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae7f79cd980e5b%3A0x4a93dcd684256de2!2sKhairat%20Plaza!5e0!3m2!1sen!2sae!4v1683575871673!5m2!1sen!2sae"
                    width="300"
                    height="150"
                    style={{border:0, paddingTop:"5%"}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default ContactUs;
