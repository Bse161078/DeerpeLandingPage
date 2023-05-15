import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    footer: {
     
      color: "#fff",
      padding: theme.spacing(6),
      
    },
    quickLink: {
      color: "black",
      textDecorationLine : 'none',
     
      "&:hover": {
        textDecorationLine : 'none',
        color : '#340',
      },
    },
    alignment:{
     textAlign: "left",
   
      display:"flex",
      flexDirection:"column",
      [theme.breakpoints.down("sm")]: {
       
        marginTop : "-20%"
      },
    }
  }));