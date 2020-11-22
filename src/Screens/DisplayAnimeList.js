import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AnimeListPager from './AnimeListPager';
import Filters from './Filters';

export default function DisplayAnimeList() {
    const classes=useStyles()
    return(
        <Box className={classes.root}>
             <Grid item lg={2} mg={10} xs={12}>
                <Filters/>
            </Grid>
            <Grid item xs={12} md={10} lg={10}>
                <AnimeListPager/>
            </Grid>   
        </Box>
    );
}



const useStyles = makeStyles((theme) =>
 ({
    root:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        margin:theme.spacing(1)
    },
  }));
