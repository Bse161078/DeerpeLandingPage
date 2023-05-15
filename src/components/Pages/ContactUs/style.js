import { makeStyles } from "@material-ui/core";
import Bg from "../../../assets/Bg.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",

    [theme.breakpoints.up("md")]: {
      paddingBottom: "42%",
    },
    [theme.breakpoints.only("xs")]: {
      paddingBottom: "100%",
    },
  },
  whiteBox: {
    position: "absolute",
    width: "970px",
    height: "600px",
    left: "124px",

    background: "#FFFFFF",
    boxShadow: "0px 0px 60px 30px rgba(0, 0, 0, 0.03)",
    borderRadius: "10px",
    padding: "0.5%",
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      left: "15px",
      paddingRight: "1%",
      height: "1150px",

      paddingLeft:"1%",
      paddingTop:"1%"
    },
    [theme.breakpoints.only("md")]: {
      left: "110px",
      paddingRight: "3%",
      height: "700px",
    },
    [theme.breakpoints.up("lg")]: {
      left: "150px",
      height: "720px",
    },
  },
  coloredBox: {
    backgroundColor: "#D49737",
    opacity: 0.9,
    marginTop: "10px",
    borderRadius: "10px",

    textAlign: "left",
    [theme.breakpoints.only("sm")]: {
  
    },
  },
}));
