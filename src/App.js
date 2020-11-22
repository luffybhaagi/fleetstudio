import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import HomePage from "./HomePage";
import theme from "./theme";
import AnimeList from "./Screens/HomeAnimeList";
import SelectedAnime from "./Screens/SelectedAnime";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Navigations() {
  return (
    <Switch>
      <Route path="/list">
        <AnimeList />
      </Route>{" "}
      <Route path="/selected">
        <SelectedAnime />
      </Route>{" "}
      <Route exact path="/">
        <HomePage />
      </Route>{" "}
    </Switch>
  );
}

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigations />
      </ThemeProvider>{" "}
    </div>
  );
}

export default App;
