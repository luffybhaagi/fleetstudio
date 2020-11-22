import {
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cuid from "cuid";
import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import AppBar from '@material-ui/core/AppBar';
import {
  Redirect
} from "react-router-dom";
import ErrorAlert from "./commonUtils/errorSnackBarBottom";
import { searchResult, updateSearchText,udpateOrderBy,updatePageNumber} from './Redux/SearchSlice'
import { connect } from "react-redux";
import { LoadSearchAnime } from "./Server/SearchAnime";
import CircularBackDropProgress from "./commonUtils/CIrcularBackDropProgress";

const mapDispatch={ searchResult,updateSearchText,udpateOrderBy,updatePageNumber }

const HomePage=({searchResult,updateSearchText,udpateOrderBy,updatePageNumber}) =>{

  const classes = useStyles();
  const [text, setText] = useState(null);
  const [redirect,setRedirect]=useState(false);
  const [message,setMessage]=useState(null)
  const [loading,setLoading]=useState(null)

  const handleSearch =() => {
  
    if (text === null || text === "" || text.length < 3) {
      setMessage({msg:"Enter atleast 3 characters for search", key:cuid()})
    }
    else {
      setLoading(true)
      updateSearchText(text)
      LoadSearchAnime(text, 1, searchResult, updatePageNumber)
      setRedirect(true)
      setLoading(false)
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };


  if(loading)
  return <CircularBackDropProgress/>

  if(redirect)
    return <Redirect to="/list"/>

  return (
    <>
    <AppBar>
    <Typography variant="h1" gutterBottom style={{fontWeight:"italic",marginLeft:"1%",color:"black"}}>
        Anime
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
          >
            <Button 
            onClick={()=>handleSearch()}
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
      { message && <ErrorAlert message={message.msg} key={message.key} />}
    </>
  );
}

export default connect(null, mapDispatch)(HomePage)

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


