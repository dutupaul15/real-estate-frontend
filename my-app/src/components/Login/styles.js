import { makeStyles } from "@mui/styles";
import image from "../../photos/backgroundImage.jpg"

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "whitesmoke !important",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    height: "100vh",
    width: "100vw"
  },
  bigContainer: {
    backgroundImage:`url(${image})`,
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
  questionTypo: {
    paddingTop: 50,
    width: "50%",
  },
}));

export default useStyles;
