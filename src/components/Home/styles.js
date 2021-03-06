import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    minWidth: "45%",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    padding: "30px 0",
  },
  paperContainer: {
    margin: "30px 0",
    padding: "20px",
    backgroundColor: "white",
    border: "1px solid rgba(255, 255, 255, 0.12)",
  },
  activeButton: {
    marginBottom: "30px",
    width: "100%",
  },
  submitButton: {
    marginTop: "30px",
    width: "100%",
  },
  formDropdown: {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
  },
  doughnut: {
    maxWidth: "300px",
    maxHeight: "300px",
    margin: "0 auto",
    marginBottom: "20px",
  },
}));
