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
   // backgroundColor:"red",
    height: "10%",
  },
  paulIMob: {
    fontFamily: "Lucida Console !important",
    fontSize: "2rem !important",
    color: "#663300",
  },
  bottomContainer: {
   // backgroundColor: "yellow",
    display: "flex",
    flexDirection:"row !important",
    height: "87%",
    marginTop: "1rem !important",
  },
  leftContainer:{
    display:  "flex",
   // backgroundColor: "#95B9C7",
    height: "100%",
    flexDirection:"column !important",
    alignItems: "center !important",
  },
  searchBar:{
    alignItems: "center !important",
    paddingTop:"1rem",
  },
  categoriesTypo: {
    fontFamily: "Century Gothic !important",
  },
  categoriesGridItem: {
    alignItems: "center !important",
    paddingTop: "1rem",
  },
  rightContainer: {
   // backgroundColor: "#FAAFBA",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    // flexDirection:"row !important",
    alignItems: "center",
  },
  actionCard: {
    display: "flex",
   // backgroundColor: "black",
    flexShrink: "1 !important",
    margin: "1rem !important",
  },

}));


export default useStyles;
