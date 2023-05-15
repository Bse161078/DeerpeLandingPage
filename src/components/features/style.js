import { makeStyles } from "@material-ui/core";
import Bg from "../../assets/Bg.png";
import blurEffect from "../../assets/blurEffect.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",

    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("md")]: {
      paddingBottom:"3%"
  
    },
  },
  blurEffectPic: {
    backgroundImage: `url(${blurEffect})`,

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",

    [theme.breakpoints.up("xs")]: {
      height: "50vh",
    },
  },
  twoPhoneSize:{
    [theme.breakpoints.only("sm")]:{
      width:"85%"
    },
    [theme.breakpoints.only("xs")]:{
      width:"85%"
    }
    
  },
  mockUpSize2:{
    [theme.breakpoints.only("sm")]:{
      width:"210%"
    },
    [theme.breakpoints.only("xs")]:{
      width:"210%"
    }
  },
  MockUp1Size:{
    width:"100%"
  },
  soundBoxPicsSize:{
    [theme.breakpoints.only("sm")]:{
      width:"100%"
    },
    [theme.breakpoints.only("xs")]:{
      width:"100%"
    }
  },
  title:{
    display:'flex',

    [theme.breakpoints.down("sm")]:{
      paddingLeft:"5%",
      
  
    },
   
  }
}));
