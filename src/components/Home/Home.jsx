import React from "react";
import {
  Typography,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";

const initialState = [
  {
    type: "VS Code",
    category: "",
    time: "2",
    color: "green",
  },
  {
    type: "Github",
    category: "",
    time: "0.5",
    color: "rgb(0,255,0)",
  },
];
const chartData = {
  datasets: [
    {
      data: initialState.map((c) => c.time),
      backgroundColor: initialState.map((c) => c.color),
    },
  ],
  labels: initialState.map((c) => c.type),
};

const Home = () => {
  const classes = useStyles();
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">All Activities</Typography>
      <div className={classes.mainContainer}>
        <Paper className={classes.paperContainer}>
          <Doughnut data={chartData} className={classes.doughnut} />
          <Alert severity="success">Active</Alert>
          <div className={classes.formDropdown}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Project</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                //   onChange={handleChange}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Task</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                //   onChange={handleChange}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.submitButton}
            component={Link}
            to="/activities"
          >
            Submit All Work
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
