import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navbar: {
    paddingTop: "10px",
    width: "65px",
    backgroundColor: "black",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
  navbarLink: {
    color: "white !important",
    margin: "10px 0",
    padding: "0",
  },
}));
