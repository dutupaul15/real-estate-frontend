import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "purple !important",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    height: "100vh",
    width: "100vw",
    flexDirection: "row !important",
  },
  navBar:{
    backgroundColor:"red",
    height: "10%",
  },
  paulIMob: {
    fontFamily: "Lucida Console !important",
    fontSize: "2rem !important",
    color: "#663300",
  },
  bottomContainer: {
    backgroundColor: "#ddff33",
    flexDirection: "column !important",
    height: "87%",
    marginTop: "1rem !important",
    
  },
  leftContainer:{
    backgroundColor: "blue",
    height: "100%",
    flexDirection:"column !important",
    alignItems: "center !important",
  },
  searchBar:{
    alignItems: "center !important",
    paddingTop:"1rem",
  },
  categoriesTypo: {
    paddingTop:"10rem !important",
    marginRight:"10rem !important",
    fontFamily: "Century Gothic !important",
  }
}));


export default useStyles;
