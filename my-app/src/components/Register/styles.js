import { makeStyles } from "@mui/styles";

import image from "../../photos/backgroundImageRegister.jpg";

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "whitesmoke !important",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    height: "100vh",
    width: "100vw",
  },
  bigContainer: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center !important",
  },
  paulIMob: {
    fontFamily: "Lucida Console !important",
    fontSize: "5rem !important",
    color: "#663300",
  },
  credentialsTypo: {
    marginBottom: "1px",
  },
  credentialsTextField: {
    width: "auto",
    paddingTop: 15,
    paddingLeft: 15,
  },
  filledTextFiled: {
    background: "rgb(255, 255, 255)",
  },
  buttonContainer: {
    padding: 50,
    
  }
}));

export default useStyles;
