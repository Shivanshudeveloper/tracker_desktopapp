import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    minWidth: "45%",
    //     "& .MuiFormLabel-root": {
    //       color: "white",
    //     },
    //   },
    //   MuiInputBase: {
    //     root: {
    //       "&.MuiInput-underline:before": {
    //         transition:
    //           "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    //         borderBottom: "1px solid rgba(255, 255, 255, 0.7)",
    //       },
    //     },
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    padding: "30px 0",
    backgroundColor: "#ccccd5",
    borderRadius: "20px",
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
  },
}));
