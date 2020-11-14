import { Box, Button, ButtonGroup, Container, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',     
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    container2:{
        display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',     
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    serverButton:{
        '& > *':{
            margin: theme.spacing(1),
        }
    },
    tasks:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    queue:{
        '& > *':{
            margin: theme.spacing(2),
        },
        backgroundColor:"lightBlue",
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    container3: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',     
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      color:{
          background:'blue'
      }
  }));

function HomePage(){

    const classes = useStyles();
    const colors =[
        "#FFFFFF",
        "#000000",
        "#000080",
        "#6495ed",
        "#483d8b",
        "#6a5acd",
    ]
    // const data = [];
    // data.push(colors)

    return(
        <>
         <Container className={classes.root}>
          <Paper className={classes.container2} >
           {/* <Paper className={classes.serverButton}> */}
            <TextField 
             id="outlined-basic" 
             label="Search name" 
             variant="outlined"
             size="small" 
              />
           {/* </Paper> */}
           {/* <Paper className={classes.queue}> */}
           <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
                <Button>Submit</Button>
                <Button>Clear</Button>
            </ButtonGroup>
           {/* </Paper> */}
           </Paper>
       </Container>
       <Paper className={classes.container3} square >
           {colors.map()((color)=>(
               <Box colors={colors} />
           ))}
           <Box color="#000000" />
        </Paper>
   </>
    )
}


export default HomePage;