import { makeStyles } from "@material-ui/core";
import Bg from '../../../assets/Bg.png'


export const useStyles = makeStyles((theme) => ({
  root: {
    
    backgroundImage: `url(${Bg})`,
    backgroundSize: "100% 80%",
    backgroundRepeat:"no-repeat",
    [theme.breakpoints.only("sm")]: {
      backgroundSize: "cover",
    },
    [theme.breakpoints.only("xs")]: {
      backgroundSize: "cover",
  
    },
QRCodePos:{
  [theme.breakpoints.down("sm")]: {
  paddingLeft:"10%"

  },
 
}
    
  
},
GlaxyNoteSize:{
  
    width:"100%",
  },
}));