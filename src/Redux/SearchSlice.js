import { createSlice } from "@reduxjs/toolkit"

const SearchSlice=createSlice({
    name:'AnimeSearch',
    initialState:{
        searchText:null,
        searchResults:{
            "request_hash": "request:search:2559f17accc1ff04c5be0b47564cc7eeb53d3013",
            "request_cached": true,
            "request_cache_expiry": 426556,
            "results": [
                {
                    "mal_id": 20,
                    "url": "https://myanimelist.net/anime/20/Naruto",
                    "image_url": "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
                    "title": "Naruto",
                    "airing": false,
                    "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
                    "type": "TV",
                    "episodes": 220,
                    "score": 7.89,
                    "start_date": "2002-10-03T00:00:00+00:00",
                    "end_date": "2007-02-08T00:00:00+00:00",
                    "members": 1646530,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 16870,
                    "url": "https://myanimelist.net/anime/16870/The_Last__Naruto_the_Movie",
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/67631.jpg?s=d84468711f6c7b6c122e4822fb4ab805",
                    "title": "The Last: Naruto the Movie",
                    "airing": false,
                    "synopsis": "Two years have passed since the end of the Fourth Great Ninja War. Konohagakure has remained in a state of peace and harmony—until Sixth Hokage Kakashi Hatake notices the moon is dangerously approachi...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.76,
                    "start_date": "2014-12-06T00:00:00+00:00",
                    "end_date": "2014-12-06T00:00:00+00:00",
                    "members": 308569,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 2472,
                    "url": "https://myanimelist.net/anime/2472/Naruto__Shippuuden_Movie_1",
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/79705.jpg?s=80162f3e16a4b76638f535bf23ac324c",
                    "title": "Naruto: Shippuuden Movie 1",
                    "airing": false,
                    "synopsis": "A group of ninja is planning to revive a powerful demon, and once its spirit is reunited with its body, the world will be destroyed. The only way to prevent this from happening is for Shion, a shrine...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.31,
                    "start_date": "2007-08-04T00:00:00+00:00",
                    "end_date": "2007-08-04T00:00:00+00:00",
                    "members": 196054,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 1735,
                    "url": "https://myanimelist.net/anime/1735/Naruto__Shippuuden",
                    "image_url": "https://cdn.myanimelist.net/images/anime/5/17407.jpg?s=2bf24a22a339223dcadb1cdfc3307b61",
                    "title": "Naruto: Shippuuden",
                    "airing": false,
                    "synopsis": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the myster...",
                    "type": "TV",
                    "episodes": 500,
                    "score": 8.15,
                    "start_date": "2007-02-15T00:00:00+00:00",
                    "end_date": "2017-03-23T00:00:00+00:00",
                    "members": 1375253,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 28755,
                    "url": "https://myanimelist.net/anime/28755/Boruto__Naruto_the_Movie",
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/78280.jpg?s=9d8b257b29ff99f0f136562547d0d465",
                    "title": "Boruto: Naruto the Movie",
                    "airing": false,
                    "synopsis": "The spirited Boruto Uzumaki, son of Seventh Hokage Naruto, is a skilled ninja who possesses the same brashness and passion his father once had. However, the constant absence of his father, who is busy...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.54,
                    "start_date": "2015-08-07T00:00:00+00:00",
                    "end_date": "2015-08-07T00:00:00+00:00",
                    "members": 289891,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 34566,
                    "url": "https://myanimelist.net/anime/34566/Boruto__Naruto_Next_Generations",
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/84460.jpg?s=ae561b0c245d07556cbdfbbf1ee374a9",
                    "title": "Boruto: Naruto Next Generations",
                    "airing": true,
                    "synopsis": "Following the successful end of the Fourth Shinobi World War, Konohagakure has been enjoying a period of peace, prosperity, and extraordinary technological advancement. This is all due to the efforts...",
                    "type": "TV",
                    "episodes": 0,
                    "score": 5.91,
                    "start_date": "2017-04-05T00:00:00+00:00",
                    "end_date": null,
                    "members": 458660,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 4437,
                    "url": "https://myanimelist.net/anime/4437/Naruto__Shippuuden_Movie_2_-_Kizuna",
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/17830.jpg?s=bb43646538390435098f5ef84faa0437",
                    "title": "Naruto: Shippuuden Movie 2 - Kizuna",
                    "airing": false,
                    "synopsis": "A mysterious group of ninjas makes a surprise attack on the Konohagakure, which takes great damage. The nightmare of another Shinobi World War could become a reality. Sasuke, who left Konoha to kill h...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.3,
                    "start_date": "2008-08-02T00:00:00+00:00",
                    "end_date": "2008-08-02T00:00:00+00:00",
                    "members": 175064,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 4134,
                    "url": "https://myanimelist.net/anime/4134/Naruto__Shippuuden_-_Shippuu_Konoha_Gakuen_Den",
                    "image_url": "https://cdn.myanimelist.net/images/anime/5/51895.jpg?s=50657ee2b01cf3e31680314e7fe65981",
                    "title": "Naruto: Shippuuden - Shippuu! \"Konoha Gakuen\" Den",
                    "airing": false,
                    "synopsis": "Naruto school special. Naruto is a new cool student and when he meets Sasuke they start fighting.",
                    "type": "Special",
                    "episodes": 1,
                    "score": 7.16,
                    "start_date": "2008-02-06T00:00:00+00:00",
                    "end_date": "2008-02-06T00:00:00+00:00",
                    "members": 50426,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 838,
                    "url": "https://myanimelist.net/anime/838/Narutaru__Mukuro_Naru_Hoshi_Tama_Taru_Ko",
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/12023.jpg?s=8dfc94b92c45916f8de54db0ca5054de",
                    "title": "Narutaru: Mukuro Naru Hoshi Tama Taru Ko",
                    "airing": false,
                    "synopsis": "During her summer holiday at her grandparents house Tamai Shiina, a young and cheerful schoolgirl, meets a strange looking creature. They befriend each other and Shiina names it \"Hoshimaru: The Round...",
                    "type": "TV",
                    "episodes": 13,
                    "score": 6.09,
                    "start_date": "2003-07-07T00:00:00+00:00",
                    "end_date": "2003-09-29T00:00:00+00:00",
                    "members": 28308,
                    "rated": "R"
                },
                {
                    "mal_id": 13667,
                    "url": "https://myanimelist.net/anime/13667/Naruto__Shippuuden_Movie_6_-_Road_to_Ninja",
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/51863.jpg?s=27ab188d97eb1262acf899c2e9813bbe",
                    "title": "Naruto: Shippuuden Movie 6 - Road to Ninja",
                    "airing": false,
                    "synopsis": "Returning home to Konohagakure, the young ninja celebrate defeating a group of supposed Akatsuki members. Naruto Uzumaki and Sakura Haruno, however, feel differently. Naruto is jealous of his comrades...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.68,
                    "start_date": "2012-07-28T00:00:00+00:00",
                    "end_date": "2012-07-28T00:00:00+00:00",
                    "members": 202419,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 442,
                    "url": "https://myanimelist.net/anime/442/Naruto_Movie_1__Dai_Katsugeki_Yuki_Hime_Shinobu_Houjou_Dattebayo",
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/76015.jpg?s=cf22c3c0297cf6dca2fb1c97ced2cd41",
                    "title": "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!",
                    "airing": false,
                    "synopsis": "Naruto Uzumaki and his squadmates, Sasuke Uchiha and Sakura Haruno, are sent on a mission to escort a movie crew on its way to film in the Land of Snow. They soon find out that they are accompanying a...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.11,
                    "start_date": "2004-08-21T00:00:00+00:00",
                    "end_date": "2004-08-21T00:00:00+00:00",
                    "members": 201165,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 936,
                    "url": "https://myanimelist.net/anime/936/Naruto_Movie_2__Dai_Gekitotsu_Maboroshi_no_Chiteiiseki_Dattebayo",
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/76016.jpg?s=77c701f8a3bd608240c69f4080212431",
                    "title": "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
                    "airing": false,
                    "synopsis": "Naruto, Shikamaru, and Sakura are executing their mission of delivering a lost pet to a certain village. However, right in the midst of things, troops led by the mysterious knight, Temujin, attack the...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 6.89,
                    "start_date": "2005-08-06T00:00:00+00:00",
                    "end_date": "2005-08-06T00:00:00+00:00",
                    "members": 161490,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 840,
                    "url": "https://myanimelist.net/anime/840/Narue_no_Sekai",
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/19048.jpg?s=67d9ecd185af80afe163db672fd821c2",
                    "title": "Narue no Sekai",
                    "airing": false,
                    "synopsis": "Meet Narue, an adorable schoolgirl with a secret. She's really an alien with powers right out of a sci-fi comic! But growing up is never easy, and sometimes it doesn't help when you're from outer spac...",
                    "type": "TV",
                    "episodes": 12,
                    "score": 6.6,
                    "start_date": "2003-04-05T00:00:00+00:00",
                    "end_date": "2003-06-28T00:00:00+00:00",
                    "members": 15887,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 8246,
                    "url": "https://myanimelist.net/anime/8246/Naruto__Shippuuden_Movie_4_-_The_Lost_Tower",
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/23344.jpg?s=accb3be6ff4e0c4d7612bdaad5e466bc",
                    "title": "Naruto: Shippuuden Movie 4 - The Lost Tower",
                    "airing": false,
                    "synopsis": "Assigned on a mission to capture Mukade, a missing-nin, Naruto Uzumaki sets out for the once glorious historic ruins of \"Ouran\", where he pursues and corners the rogue ninja. Mukade's goal is revealed...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.43,
                    "start_date": "2010-07-31T00:00:00+00:00",
                    "end_date": "2010-07-31T00:00:00+00:00",
                    "members": 161685,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 10075,
                    "url": "https://myanimelist.net/anime/10075/Naruto_x_UT",
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/30485.jpg?s=0e585f452876ec490cd1f922d26fad36",
                    "title": "Naruto x UT",
                    "airing": false,
                    "synopsis": "All-new animation offered throughout UNIQLO clothing stores in Japan on January 1, 2011. The DVD contains an exclusive version of Mayonaka Orchestra, by the Japanese rock band Aqua Timez. A limited nu...",
                    "type": "OVA",
                    "episodes": 1,
                    "score": 7.41,
                    "start_date": "2011-01-01T00:00:00+00:00",
                    "end_date": "2011-01-01T00:00:00+00:00",
                    "members": 38637,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 10686,
                    "url": "https://myanimelist.net/anime/10686/Naruto__Honoo_no_Chuunin_Shiken_Naruto_vs_Konohamaru",
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/30813.jpg?s=55399a5c0c95cad6a6fb83e09dba727c",
                    "title": "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!",
                    "airing": false,
                    "synopsis": "Naruto faces off against his old pupil Konohamaru in a tournament during the chuunin entrance exams.",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 7.16,
                    "start_date": "2011-07-30T00:00:00+00:00",
                    "end_date": "2011-07-30T00:00:00+00:00",
                    "members": 53335,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 2144,
                    "url": "https://myanimelist.net/anime/2144/Naruto_Movie_3__Dai_Koufun_Mikazuki_Jima_no_Animaru_Panikku_Dattebayo",
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/76017.jpg?s=07ffbcb450ac4c783fc80d64c302cd4c",
                    "title": "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo!",
                    "airing": false,
                    "synopsis": "Naruto, Kakashi, Sakura, and Lee are sent to protect a prince during his trip around the world and see that he returns safely to his home in the Moon Country. The Moon Country happens to be really ric...",
                    "type": "Movie",
                    "episodes": 1,
                    "score": 6.9,
                    "start_date": "2006-08-05T00:00:00+00:00",
                    "end_date": "2006-08-05T00:00:00+00:00",
                    "members": 145562,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 12979,
                    "url": "https://myanimelist.net/anime/12979/Naruto_SD__Rock_Lee_no_Seishun_Full-Power_Ninden",
                    "image_url": "https://cdn.myanimelist.net/images/anime/13/36475.jpg?s=afbabba381a6eebe252dc3c6ed09067a",
                    "title": "Naruto SD: Rock Lee no Seishun Full-Power Ninden",
                    "airing": false,
                    "synopsis": "Welcome to the Hidden Leaf Village. The village where Uzumaki Naruto, star of the TV show \"Naruto\" makes his home. Every day, countless powerful ninjas carry out missions and train to hone their skill...",
                    "type": "TV",
                    "episodes": 51,
                    "score": 7.15,
                    "start_date": "2012-04-03T00:00:00+00:00",
                    "end_date": "2013-03-26T00:00:00+00:00",
                    "members": 60751,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 761,
                    "url": "https://myanimelist.net/anime/761/Naruto__Akaki_Yotsuba_no_Clover_wo_Sagase",
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/11240.jpg?s=9c3e8b5fbbc6163c4c25c67d54692406",
                    "title": "Naruto: Akaki Yotsuba no Clover wo Sagase",
                    "airing": false,
                    "synopsis": "The grandson of the 3rd Hokage, Konohamaru, finally has a crush on a girl, but he has a big problem she is soon to be moving away from the hidden leaf village. Konohamaru trying to make her stay seeks...",
                    "type": "Special",
                    "episodes": 1,
                    "score": 6.52,
                    "start_date": "2003-05-24T00:00:00+00:00",
                    "end_date": "2003-05-24T00:00:00+00:00",
                    "members": 65620,
                    "rated": "PG-13"
                },
                {
                    "mal_id": 1074,
                    "url": "https://myanimelist.net/anime/1074/Naruto_Narutimate_Hero_3__Tsuini_Gekitotsu_Jounin_vs_Genin_Musabetsu_Dairansen_Taikai_Kaisai",
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/11244.jpg?s=04a45f30a2d3fa666388fcb5dab37750",
                    "title": "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
                    "airing": false,
                    "synopsis": "A contest is made by the Fifth Hokage called Jonin vs Genin. The point is to collect crystals for points, with the higher-ranked Chunin and Jonin holding crystals worth more points. The Genin have blu...",
                    "type": "OVA",
                    "episodes": 1,
                    "score": 6.77,
                    "start_date": "2005-12-22T00:00:00+00:00",
                    "end_date": "2005-12-22T00:00:00+00:00",
                    "members": 63473,
                    "rated": "PG-13"
                }
            ],
            "last_page": 20
        },
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