import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    display: "flex",
 
    width: "35%",
    paddingLeft:"15%",
    [theme.breakpoints.down("sm")]:{
      width: "50%",
    },
  },
  list: {
    width: 250,
  },

  
  navLink: {
    color: "black",
    textDecoration: "none",
    marginLeft: theme.spacing(5),
   
  "&:focus": {
   
    fontSize: "18px",
    color: "black",
    textDecoration: "underline",
  },
  
  marginRight: theme.spacing(2),
},



navLink2: {
  color: "white !important",
  textDecoration: "none",
  marginLeft: theme.spacing(5),
 
"&:focus": {
 
  fontSize: "18px",
  color: "black",
  textDecoration: "underline",
},

marginRight: theme.spacing(2),
},


navLinkAlign:{
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "end"
    
  },
  
  
 
  
}


}));
