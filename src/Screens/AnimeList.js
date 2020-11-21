import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, ButtonGroup, TextField } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper'
import FilterBy from './FilterBy';
import AnimeListItems from './AnimeListItems';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    inputColor:{
      color:"red"
    },
   
  },
 
}));

export default function AnimeList() {
  const classes = useStyles();
  const [text, setText] = useState(null);
  const [alert, setAlert] = useState(false);
  const [redirect,setRedirect]=useState(false);

  const handleSubmit = () => {
  
    if (text === null || text === "") {
      setAlert(true);
    } else {
      setRedirect(true)
    }
  };

  if(redirect)
    return <Redirect to="/list"/>

    const inputProps={
        color:"blue"
    }

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Logo
          </Typography>
          <div className={classes.search}>
          <TextField
            id="outlined-basic"
            label="Search anime"
            variant="outlined"
            value={text}
            size="small"
            inputProps={{
              className:classes.inputColor
            }}
            // onChange={(event) => handleChange(event)}
            fullWidth 
           />
          </div>
          <div className={classes.search} >
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
            onClick={()=>alert('clicked')}
            endIcon={<Clear/>}
            >Clear</Button>
          </ButtonGroup>
          </div>
        </Toolbar>
      </AppBar>
      <AnimeListItems />
      <FilterBy />
    </div>
    
    </>
  );
}
