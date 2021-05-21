import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {
  Typography,
  ThemeProvider,
  TextField,
  Button,
} from "@material-ui/core";
import { Card } from '@material-ui/core';
import VaccineCenter from "./VaccineCenter";


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles({
 
  button: {
    background: "green",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  h1: {
    color: "Red",
    textAlign: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  div: {
    textAlign: "center",
    width: "100%",
  },
});

function App() {
  const [pincode, setPincode] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const submit = async () => {
    console.log(pincode);
    console.log(date.split("-").reverse().join("-"));
    let dateData = date.split("-").reverse().join("-");
    let response = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${dateData}`,
      { method: "GET" }
    ).then((res) => res.json());
    setData(response);
    console.log(response);
  };
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h5" className={classes.h1}>
          Find Vaccination Center
        </Typography>
        <br/>
        <br/>
        <div className={classes.div}>
          <TextField
            id="standard-basic"
            name="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className={classes.textField}
            label="Enter Pin Code"
          />
          <br />
          <br />
          <TextField
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <br />
          <Button
            disabled={!pincode && !date}
            variant="contained"
            color="primary"
            onClick={submit}
          >
            Get Data
          </Button>
          <br/>
          <br/>
          <ul>

          {data?.centers?.map((data ,i)=> <VaccineCenter data={data} i={i} />)}
          </ul>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
