import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

export default function FilterBy(){

    const classes = useStyles();

    return(
        <div className={classes.filterPaper} >
        <Paper elevation={3} >
          <Typography className={classes.filterText} >Filter by</Typography>
        </Paper>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    filterPaper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(30),
          height: theme.spacing(40),
        },
        margin:'5%'
      },
      filterText:{
        marginLeft:'60%',
        marginRight:'20%'
      }
}))

