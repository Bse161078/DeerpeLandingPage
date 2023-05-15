import { makeStyles } from "@material-ui/core";
import Bg from '../../../assets/Bg.png';



export const useStyles = makeStyles((theme) => ({
  root: {
    
      
    
    backgroundRepeat:'no-repeat', 
    
    backgroundImage: `url(${Bg})`,
    backgroundSize: "100% 80%",

    
    [theme.breakpoints.up("md")]: {
   paddingBottom : "5%"
    }, 
    [theme.breakpoints.only("sm")]: {
      backgroundSize: "100% 80%",
    },
    [theme.breakpoints.only("xs")]: {
      backgroundSize: "300% 100%",
      
  
    },
},

MockUp1Size:{
  width:"80%",  
  [theme.breakpoints.only("xs")]: {
     width:"100%"
     }, 
     [theme.breakpoints.only("sm")]: {
      width:"100%"
        },
},
blogPicSizes:{
  [theme.breakpoints.only("md")]: {
    width:"50%"
    }, 
    [theme.breakpoints.only("xs")]: {
      width:"80%"
      }, 

},
blogPicSize2:{
  [theme.breakpoints.only("md")]: {
    width:"50%"
    }, 
    [theme.breakpoints.only("xs")]: {
      width:"90%"
      }, 

}
}));