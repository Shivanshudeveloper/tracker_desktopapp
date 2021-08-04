import React, { useState } from "react";

import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import useStyles from "./styles";

const Activities = () => {
  const classes = useStyles();
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">All Activities</Typography>
      <div className={classes.dateContainer}>
        <FormControl style={{ minWidth: "150px" }}>
          <InputLabel>Date</InputLabel>
          <Select value={date} onChange={handleChange}>
            <MenuItem value={"10 Jul 2021"}>10 Jul 2021</MenuItem>
            <MenuItem value={"9 Jul 2021"}>9 Jul 2021</MenuItem>
            <MenuItem value={"8 Jul 2021"}>8 Jul 2021</MenuItem>
          </Select>
        </FormControl>
      </div>
      {date !== "" && (
        <Paper className={classes.paperContainer}>
          <Typography variant="h6">Date : {date}</Typography>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>App Name</TableCell>
                <TableCell>Time Recorded</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell className={classes.tableCell}>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fchrome1600.png&f=1&nofb=1"
                    className={classes.image}
                  />
                  Google Chrome
                </TableCell>
                <TableCell>1 Hour</TableCell>
                <TableCell>Surfing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell className={classes.tableCell}>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fohmyz.sh%2Fimg%2Fplugin-logos%2Flogo-vscode.png&f=1&nofb=1"
                    className={classes.image}
                  />
                  Visual Studio Code
                </TableCell>
                <TableCell>2 Hour</TableCell>
                <TableCell>ReactJS</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell className={classes.tableCell}>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.microcad.es%2Fwp-content%2Fuploads%2F2020%2F03%2Flogo_teams.png&f=1&nofb=1"
                    className={classes.image}
                  />
                  Teams
                </TableCell>
                <TableCell>1/2 Hour</TableCell>
                <TableCell>Meeting</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell className={classes.tableCell}>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fchrome1600.png&f=1&nofb=1"
                    className={classes.image}
                  />
                  Google Chrome
                </TableCell>
                <TableCell>1 Hour</TableCell>
                <TableCell>Surfing</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      )}
    </div>
  );
};

export default Activities;
