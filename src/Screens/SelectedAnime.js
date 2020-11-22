import {  Box, Card, CardActionArea, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { SearchSelector } from '../Redux/Selectors';


function SelectedAnime(){


    const {selectedAnime, animeVideos} = useSelector(SearchSelector)
    const classes=useStyles()

    return(
        <Container maxWidth="md" className={classes.root}>
            <Typography variant="h3" gutterBottom>{selectedAnime.title}</Typography>
            <Box className={classes.box}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={selectedAnime.image_url}
                    />
                </Card>
                <Box>
                    <Typography variant="h4" gutterBottom>Synopsis:</Typography>
                    <Typography variant="body1" gutterBottom>{selectedAnime.synopsis}</Typography>
                    <p><b>Type</b>: {selectedAnime.type}</p>
                    <p><b>Episodes</b>: {selectedAnime.episodes}</p>
                    <p><b>Score</b>: {selectedAnime.score}</p>
                    <p><b>Rated</b>: {selectedAnime.rated}</p>
                    <p><b>Members</b>: {selectedAnime.members}</p>
                    <p><b>Status</b>: {selectedAnime.airing == false? "Completed":"Ongoing"}</p>
                </Box>
            </Box>
            <Box>
            <Typography variant="h4" gutterBottom>Promo Video:</Typography>
            { ( animeVideos.promo !== undefined && animeVideos.promo.length > 0 && animeVideos.promo[0].video_url !== undefined)  ? <ReactPlayer stopOnUnmount={true} style={{height:100}} url={animeVideos.promo[0].video_url}/> :<Typography variant="body1" gutterBottom>No Promo video available</Typography> }
            </Box>
            <Box>
            <Typography variant="h4" gutterBottom>Episodes</Typography>
            { (animeVideos.episodes !== undefined &&  animeVideos.episodes.length > 0 ) ? 
                <Box className={classes.episodeBox} elevation={3}>
                    {animeVideos.episodes.map((episode)=>(
                         <Card className={classes.episodeCard}>
                         <CardActionArea
                         >
                           <CardMedia
                             className={classes.media}
                             image={episode.image_url}
                           />
                           <CardActionArea>
                             <CardContent>
                               <Typography gutterBottom variant="h5" component="h2">
                                 {episode.title}
                               </Typography>
                               <Typography gutterBottom variant="h5" component="h2">
                                 {episode.episode}
                               </Typography>
                             </CardContent>
                           </CardActionArea>
                         </CardActionArea>
                       </Card>
                    ))}
                    </Box>
            :
            <Typography variant="body1" gutterBottom>No Episodes available</Typography>}
            </Box>
        </Container>
    )
}


export default SelectedAnime;

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      '& > * ':{
          padding:'1%',
          margin:'1%'
      }
    },
    box:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        '& > * ':{
            padding:'1%',
            margin:'1%'
        }
    },
    card:{
        maxWidth: 210,
        minWidth: 210,
        maxHeight:300
    },
    media:{
        height: 300,
    },
    promo:{
        height:500,
        maxWidth:640
    },
  episodeBox: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    margin: theme.spacing(1),
    height: "100%",
    overflowY: "scroll",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  episodeCard:{
    maxWidth: 210,
    minWidth: 210,
    maxHeight: 500,
  }
  }));
  