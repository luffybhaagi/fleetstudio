import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cuid from "cuid";
import React, { useState } from "react";
import { Colors } from "./Colors";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const ColorsMap = Colors;

function HomePage() {

  const classes = useStyles();
  const [text, setText] = useState(null);
  const [colors, setColors] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleSubmit = () => {
    if (text === null || text === "") {
      setAlert(true);
    } else {
      let localColorsArray = [];
      //removes duplicate chars from string
      const modText=removeDuplicateCharacters(text)
    //storing colors
      for (let i = 0; i < modText.length; i++) {
        console.log(ColorsMap[modText.charAt(i).toUpperCase()]);
        localColorsArray.push(ColorsMap[modText.charAt(i).toUpperCase()]);
      }
      setColors(localColorsArray);
    }
  };

  function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
      })
      .join('');
  }

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    setColors([]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  return (
    <>
      <Container className={classes.root}>
      <Typography variant="h2" gutterBottom style={{fontFamily:"cursive"}}>
        Colo`extism
      </Typography>
        <Paper sm={3} className={classes.container2}>
          <TextField
            id="outlined-basic"
            label="Enter Word"
            variant="outlined"
            value={text}
            size="small"
            onChange={(event) => handleChange(event)}
          />
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="contained primary button group"
          >
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleClear}>Clear</Button>
          </ButtonGroup>
        </Paper>
      </Container>
      <br></br>
      <Divider />
      <br></br>
      <Container fixed className={classes.container3} square>
        {colors.map((color) => (
          <Box
            className={classes.colorBox}
            key={cuid()}
            style={{ backgroundColor: `${color}` }}
          >
            <Typography>{color}</Typography>
          </Box>
        ))}
      </Container>
      {alert && (
        <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Enter text to see colors
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    marginTop:'2%'
  },
  serverButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  tasks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  queue: {
    "& > *": {
      margin: theme.spacing(2),
    },
    backgroundColor: "lightBlue",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  color: {
    background: "blue",
  },
  colorBox: {
    width: "20%",
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default HomePage;
