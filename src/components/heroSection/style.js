import { makeStyles } from "@material-ui/core";
import Bg from "../../assets/Bg.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage: `url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23d4af37" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"%3E%3C/path%3E%3C/svg%3E')`,

    // backgroundRepeat: "no-repeat",


    // backgroundSize: "cover",
    backgroundImage: `url(${Bg})`,
    backgroundSize: "100% 80%",
    
    backgroundRepeat:'no-repeat',

    [theme.breakpoints.only("sm")]: {
      backgroundSize: "100% 80%",
    },
    [theme.breakpoints.only("xs")]: {
      backgroundSize: "300% 100%",
      
  
    },
  },

  AppleStorebtn: {
    display: "flex",
    justifyContent: "flex-start",

    [theme.breakpoints.up("md")]: {
      
      paddingLeft: "70px",
      paddingTop: "2%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
    },
  },
  PlayStorebtn: {
    display: "flex",

    [theme.breakpoints.up("md")]: {
      bgcolor: "#D4AF37",
      paddingLeft: "70px",
      paddingTop: "2%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
    },
  },
  GlaxyNoteSize: {
    width: "100%",
   
  },
  featureStyle: {
    marginRight: theme.spacing(20),
    marginLeft: theme.spacing(20),
  },
}));
