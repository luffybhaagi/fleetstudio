import { createSlice } from "@reduxjs/toolkit"

const SearchSlice=createSlice({
    name:'AnimeSearch',
    initialState:{
        searchText:null,
        searchResults:null,
        pageNumber:1,
        orderBy:'title',
        sortBy:'asc',
        selectedAnime:null,
        animeVideos:{}
    },
    reducers:{
        searchResult(state,action){
            state.searchResults=action.payload
        },
        updateSearchText(state,action){
            state.searchText=action.payload
        },
        updatePageNumber(state,action){
            state.pageNumber=action.payload
        },
        udpateOrderBy(state,action){
            state.orderBy=action.payload
        },
        udpateFilterBy(state,action){
            state.sortBy=action.payload
        },
        updateSelectedAnime(state,action){
            state.selectedAnime=action.payload
        },
        udpateAnimeVideo(state,action){
            state.animeVideos=action.payload
        }
    }
    
})

export const { searchResult, updateSearchText, updatePageNumber, udpateOrderBy, udpateFilterBy, updateSelectedAnime, udpateAnimeVideo} = SearchSlice.actions;
export default SearchSlice.reducer