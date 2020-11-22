import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { connect, useSelector } from "react-redux";
import { SearchSelector } from "../Redux/Selectors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  searchResult,
  updateSearchText,
  updatePageNumber,
  updateSelectedAnime,
  udpateAnimeVideo
} from "../Redux/SearchSlice";
import { LoadSearchAnime, LoadSelectedAnime } from "../Server/SearchAnime";
import FullScreenDialog from "../commonUtils/FullScreenDialog";
import SelectedAnime from "./SelectedAnime";
import CircularBackDropProgress from "../commonUtils/CIrcularBackDropProgress";

const mapDispatch = {
  searchResult,
  updateSearchText,
  updatePageNumber,
  updateSelectedAnime,
  udpateAnimeVideo
};

function AnimeListPager({
  searchResult,
  updatePageNumber,
  updateSelectedAnime,
  udpateAnimeVideo
}) {
  const { searchResults, pageNumber, searchText } = useSelector(SearchSelector);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [loading,setLoading]=useState(false)

  useEffect(() => {}, [searchResults]);

  const handlePrevious = () => {
    LoadSearchAnime(searchText, pageNumber - 1, searchResult, updatePageNumber);
  };

  const handleNext = () => {
    LoadSearchAnime(searchText, pageNumber + 1, searchResult, updatePageNumber);
  };

  const handleOpen = (anime) => {
    updateSelectedAnime(anime)
    LoadSelectedAnime(anime.mal_id, udpateAnimeVideo)
    setOpen(true)
    setSelectedData(anime)
  };

  if(loading)
  return <CircularBackDropProgress/>

  return (
    <Paper className={classes.root}>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          className={classes.previous}
          startIcon={<ArrowBackIcon />}
          disabled={pageNumber === 1}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        {/* <Typography className={classes.pageText} gutterBottom variant="h5" component="h2">Page :{pageNumber} </Typography> */}
        <Button
          variant="contained"
          color="secondary"
          className={classes.next}
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
      <Box className={classes.box} elevation={3}>
        { ( searchResults !== null && searchResults.length !== 0)
          ? searchResults.results.map((anime) => (
              <Card className={classes.card} key={anime.mal_id}>
                <CardActionArea
                  onClick={() => {
                    handleOpen(anime);
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image={anime.image_url}
                  />
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {anime.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </CardActionArea>
              </Card>
            ))
          : null}
      </Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          className={classes.previous}
          startIcon={<ArrowBackIcon />}
          disabled={pageNumber === 1}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.next}
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
      {open && (
        <FullScreenDialog
          title={selectedData.title}
          open={open}
          setOpen={setOpen}
          view={<SelectedAnime />}
        />
      )}
    </Paper>
  );
}
export default connect(null, mapDispatch)(AnimeListPager);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop:theme.spacing(7)
  },
  box: {
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
  card: {
    maxWidth: 210,
    minWidth: 210,
    maxHeight: 400,
  },
  media: {
    height: 300,
  },
  previous: {
    float: "left",
    margin: "1%",
  },
  next: {
    margin: "1%",
    float: "right",
  },
}));
