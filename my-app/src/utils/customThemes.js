import { createTheme } from "@mui/material/styles";
// import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    custombrown: {
      main: "#663300",
      contrastText: "#fff",
    },
  },
});


// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "#663300",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#663300",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#663300",
//     },
//     "&:hover fieldset": {
//       borderColor: "#663300",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#663300",
//     },
//   },
// });

export default theme;
