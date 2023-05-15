import { makeStyles } from "@material-ui/core";
import Bg from '../../assets/Bg.png'
import gradient from '../../assets/gradient.png'

export const useStyles = makeStyles((theme) => ({
  root: {
    
      
  
    backgroundRepeat:'no-repeat', 
    
    backgroundImage: `url(${Bg})`,
    
    backgroundSize: "100% 80%",

    
    [theme.breakpoints.only("sm")]: {
      backgroundSize: "300% 100%",
    },
    [theme.breakpoints.only("xs")]: {
      backgroundSize: "300% 100%",
  
    },
},
root2:{
    backgroundImage: `url(${gradient})`,
    backgroundSize: "cover",
    marginTop:"4%",

    
   

},
GlaxyNoteSize:{
  
    width:"100%",
  },
  ThreePhonesSize:{
    [theme.breakpoints.only("sm")]: {
      width:"110%",
 
    },
    [theme.breakpoints.only("xs")]: {
      width:"110%"
    },
  },

  gridSpacing:{
  
    [theme.breakpoints.only("sm")]: {
       marginTop : "10%"
        },
        [theme.breakpoints.only("xs")]: {
          marginTop : "10%"
           },
   
}

}));