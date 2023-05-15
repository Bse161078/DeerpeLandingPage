import React from 'react'
import Hero from '../../heroSection/Hero'
import Workflow from '../../workFlow/Workflow'
import Footer from '../../footer/Footer'

import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import MoneyTransfer from '../../../assets/MoneyTransfer.png';
import Recharge from '../../../assets/Recharge.png'
import Shopping from '../../../assets/Shopping.png'
import Ticket from '../../../assets/Ticket.png'
import { useStyles } from './style'

function Home() {
  const classes=useStyles();
  return (
    <>
      
      <Hero></Hero>
      <Grid container>
          <Grid item xs={12} md={3} className={classes.gridSpacing}>
                <img src={MoneyTransfer} ></img>
                <Typography style={{fontWeight:"bold"}} paddingLeft={{ md:"10%"}} >Money Transfer</Typography>
                </Grid>
                <Grid item xs={12} md={3} className={classes.gridSpacing}>
                <img src={Recharge} ></img>
                <Typography style={{fontWeight:"bold"}}  paddingLeft={{ md:"10%"}}>Recharge and Bill Payment</Typography>
                </Grid>
                <Grid item xs={12} md={3} className={classes.gridSpacing}>
                <img src={Ticket} ></img>
                <Typography style={{fontWeight:"bold"}}  paddingLeft={{ md:"10%"}}>Ticket Booking</Typography>
                </Grid>
                <Grid item xs={12} md={3} className={classes.gridSpacing}>
                <img src={Shopping} paddingLeft={{ md:"20%"}}></img>
                <Typography style={{fontWeight:"bold"}}  paddingLeft={{xs:"0%", md:"10%"}}>E-Commerce</Typography>
                </Grid>
            </Grid>
        
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default Home
