import { FormControl, FormControlLabel, FormLabel, makeStyles, Paper, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'
import { connect, useSelector } from 'react-redux'
import {udpateOrderBy,searchResult,updatePageNumber,updateSearchText} from '../Redux/SearchSlice'
import { SearchSelector } from '../Redux/Selectors'
import { LoadSearchAnime } from '../Server/SearchAnime'

const mapToDispatch={ udpateOrderBy,searchResult,updatePageNumber,updateSearchText }

function OrderBy({udpateOrderBy,searchResult,updatePageNumber,updateSearchText}){
    const classes=useStyles()
    const { searchText,orderBy, filterBy} = useSelector(SearchSelector)

    const handleChange=(event)=>{
        const localOrderBy=event.target.value
        udpateOrderBy(localOrderBy)
        LoadSearchAnime(searchText, 1, searchResult, updatePageNumber, localOrderBy, filterBy )
    }

    return(
        <Paper elevation={3} className={classes.root}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Order By</FormLabel>
                <RadioGroup value={orderBy} onChange={handleChange}>
                    <FormControlLabel value="title" control={<Radio/>} label="Title"/>
                    <FormControlLabel value="episodes" control={<Radio/>} label="Episodes"/>
                    <FormControlLabel value="rating" control={<Radio/>} label="Rating"/>
                    <FormControlLabel value="score" control={<Radio/>} label="Score"/>
                    <FormControlLabel value="start_date" control={<Radio/>} label="Start date"/>
                    <FormControlLabel value="end_date" control={<Radio/>} label="End date"/>
                </RadioGroup>
            </FormControl>
        </Paper>
    )
}

export default connect(null, mapToDispatch)(OrderBy)
const useStyles=makeStyles((theme)=>({
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