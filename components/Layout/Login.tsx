import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Lock,
  PermIdentity,
  PersonOutline,
  PersonPinCircle,
} from "@material-ui/icons";
import Image from "next/image";
import IconFacebook from "../../public/images/common/facebook_32.png";
import IconGoogle from "../../public/images/common/google_32.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "40%",
    width: "20%",
    display: "grid",
    margin: "auto",
    padding: "30px",
  },

  marginItem: {
    marginBottom: theme.spacing(4),
  },

  iconSocial: {
    margin: 'auto'
  },
  center: {
    textAlign: "center"
  }
}));

const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
interface State {
  password: string;
  showPassword: boolean;
}

export const LoginLayout = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography className={classes.marginItem} variant="h3">
        Welcome
      </Typography>
      <FormControl className={classes.marginItem}>
        <InputLabel htmlFor="standard-adornment-password">Username</InputLabel>
        <Input
          inputProps={{ style: inputStyle }}
          startAdornment={
            <InputAdornment position="start">
              <PermIdentity />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.marginItem}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          inputProps={{ style: inputStyle }}
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        fullWidth
        className={classes.marginItem}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
      <Typography className={classes.center} variant="subtitle1">Or Sign In using</Typography>
      <div className={classes.iconSocial}>
        <Image src={IconFacebook} alt="Picture of the author" />
        <Image src={IconGoogle} alt="Picture of the author" />
      </div>

      <Typography className={classes.center} variant="subtitle1">Signup</Typography>
    </Paper>
  );
};
