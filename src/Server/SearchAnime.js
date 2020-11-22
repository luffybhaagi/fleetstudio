import cuid from "cuid";
import { getRequestOption, host } from "./Config";

export const LoadSearchAnime = (
  searchText,
  page,
  searchResult,
  pageNumber,
  orderBy,
  sortBy
) => {
  const localPage = page ?? 1;
  const localOrderBy = orderBy ?? "title";
  const localSortBy = sortBy ?? "asc";

  const reqOptions = getRequestOption();
  fetch(
    `${host}search/anime?q=${searchText}&page=${localPage}&limit=20&order_by=${localOrderBy}&sort=${localSortBy}`,
    reqOptions
  )
    .then((response) => response.text())
    .then((result) => {
      searchResult(JSON.parse(result));
      pageNumber(localPage)
    })
    .catch((error) => console.log(error));
};

export const LoadSelectedAnime = (mal_id, udpateAnimeVideo) => {
  const id = mal_id;
  const reqOptions = getRequestOption()
  fetch(`${host}anime/${id}/videos`, reqOptions)
    .then((response) => response.text())
    .then((result) => udpateAnimeVideo(JSON.parse(result)))
    .catch((error) => console.log("error", error))
};
