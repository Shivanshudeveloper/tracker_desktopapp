import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const location = useLocation();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      {user !== null && (
        <div className={classes.navbar}>
          <Button
            fullWidth
            component={Link}
            to="/home"
            className={classes.navbarLink}
          >
            <HomeIcon />
          </Button>
          <Button
            fullWidth
            component={Link}
            to="/activities"
            className={classes.navbarLink}
          >
            <LocalActivityIcon />
          </Button>
          <Button
            fullWidth
            component={Link}
            to="/login"
            className={classes.navbarLink}
            onClick={() => localStorage.removeItem("user")}
          >
            <ExitToAppIcon />
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
