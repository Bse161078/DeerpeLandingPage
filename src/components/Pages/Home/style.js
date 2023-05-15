import { makeStyles } from "@material-ui/core";

export const useStyles=makeStyles((theme)=>({

gridSpacing:{
  
         [theme.breakpoints.down("sm")]: {
            marginTop : "8%"
             },
}

}));