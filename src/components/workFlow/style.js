import { makeStyles } from "@material-ui/core";
import gradient from '../../assets/gradient.png';
export const useStyles=makeStyles((theme)=>({
root:{
    backgroundImage: `url(${gradient})`,
    backgroundSize: "cover",
    paddingBottom:"10%"
},
gridSpacing:{
  
         [theme.breakpoints.down("sm")]: {
            paddingTop : "10%"
             },
}

}));