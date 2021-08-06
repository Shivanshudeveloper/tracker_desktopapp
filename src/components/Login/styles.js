import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    borderRadius: "20px",
    maxWidth: "600px",
  },
  image: {
    width: "70%",
  },
  authContainer: {
    width: "70%",
    margin: "20px 0",
  },
  passwordField: {
    margin: "10px 0",
    width: "100%",
  },
  registerNow: {
    textDecoration: "none",
    color: "black",
  },
});
