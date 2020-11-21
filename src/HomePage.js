import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  TextField,
  Typography,
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import { makeStyles } from "@material-ui/core/styles";
import cuid from "cuid";
import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import { Colors } from "./Colors";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import AppBar from '@material-ui/core/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import palette from "./theme/palette";

const ColorsMap = Colors;

function HomePage() {

  const classes = useStyles();
  const [text, setText] = useState(null);
  const [colors, setColors] = useState([]);
  const [alert, setAlert] = useState(false);
  const [redirect,setRedirect]=useState(false);

  const handleSubmit = () => {
  
    if (text === null || text === "") {
      setAlert(true);
    } else {
      setRedirect(true)
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


  if(redirect)
    return <Redirect to="/list"/>

  return (
    <>
    
    <AppBar>
    <Typography variant="h1" gutterBottom style={{fontWeight:"italic",marginLeft:"1%",color:"black"}}>
        Logo
      </Typography>
      </AppBar>
      <Container className={classes.root}>
      
        <Box sm={3} className={classes.container2}>
          <TextField
            id="outlined-basic"
            label="Search anime"
            variant="outlined"
            value={text}
            size="small"
            onChange={(event) => handleChange(event)}
            fullWidth
          />
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="contained primary button group"
          >
            <Button 
            onClick={()=>setRedirect(true)}
            startIcon={<SearchIcon/>}
            >
            Search
            </Button>
            <Button 
            onClick={handleClear}
            endIcon={<Clear/>}
            >Clear</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    flexDirection:"column",
    // backgroundColor:"#D9D4D3",
    // height:"100%",
    marginTop:'20%',
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    // marginTop:'20%'
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
