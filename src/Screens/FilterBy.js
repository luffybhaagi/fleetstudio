import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { connect, useSelector } from 'react-redux';
import { SearchSelector } from '../Redux/Selectors';
import {searchResult, updatePageNumber, udpateFilterBy} from '../Redux/SearchSlice'
import { LoadSearchAnime } from '../Server/SearchAnime';


const mapToDispatch={ searchResult,updatePageNumber, udpateFilterBy }

function FilterBy({ searchResult,updatePageNumber, udpateFilterBy}){
    const { searchText, sortBy, orderBy} = useSelector(SearchSelector)
    const classes = useStyles();


    const handleChange=(event)=>{
      const localSortBy=event.target.value
      udpateFilterBy(localSortBy)
      LoadSearchAnime(searchText, 1, searchResult, updatePageNumber, orderBy, localSortBy )
  }
    return(
      <Paper elevation={3} className={classes.root}>
      <FormControl component="fieldset">
          <FormLabel component="legend">Sort By</FormLabel>
          <RadioGroup value={sortBy} onChange={handleChange}>
              <FormControlLabel value="asc" control={<Radio/>} label="Ascending"/>
              <FormControlLabel value="desc" control={<Radio/>} label="Descending"/>
          </RadioGroup>
      </FormControl>
  </Paper>
    )
}

export default connect(null, mapToDispatch)(FilterBy)
const useStyles = makeStyles((theme) => ({
      root:{
        display:"flex",
        flex:1,
        margin:theme.spacing(2),
        padding:theme.spacing(2),
        '& > *':{
            margin:'5%',
            padding:'5%'
        },
        

    }
}))

