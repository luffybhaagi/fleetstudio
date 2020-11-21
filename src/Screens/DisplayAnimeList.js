import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FilterBy from './FilterBy';
import AnimeListItems from './AnimeListItems';



const useStyles = makeStyles((theme) =>
 ({
    root:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        margin:theme.spacing(1)
    },


  }));

export default function DisplayAnimeList() {
    const classes=useStyles()
    return(
        <Box className={classes.root}>
            <Grid item xs={12} md={12} lg={8}>
                <AnimeListItems />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
                <FilterBy />
            </Grid>
        </Box>
    );
}

