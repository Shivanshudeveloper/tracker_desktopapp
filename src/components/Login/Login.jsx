import React, { useState } from "react";

import {
  TextField,
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "./styles";

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className={classes.mainContainer}>
        <img
          src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1626147338/tracker/Tracktime_Icon_File_i3vsim.svg"
          alt="Login"
          className={classes.image}
        />
        <div className={classes.authContainer}>
          <TextField label="Email" variant="outlined" fullWidth />
          <FormControl variant="outlined" className={classes.passwordField}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <Button
            component={Link}
            to="/home"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Login
          </Button>
        </div>
        <Typography
          variant="body2"
          component={Link}
          to="https://www.google.com"
          className={classes.registerNow}
        >
          New here? Register Now!!
        </Typography>
      </div>
    </div>
  );
};

export default Login;
