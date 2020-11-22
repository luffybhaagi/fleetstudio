export const host="https://api.jikan.moe/v3/"

export const getRequestOption=()=>{
    return{
        method:'GET',
        redirect:'follow',
    }
}

export const getReqCorsOption=()=>{
    return{
        method:'GET',
        redirect:'follow',
        // mode:'no-cors',
        // credentials:'include'
        // Accept:'*/*',
        // "Accept-Encoding":"gzip, deflate, br"
    }
}