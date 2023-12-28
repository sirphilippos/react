import axios from 'axios'

//BASE DA API: https://api.themoviedb.org/3/

//movie/11?api_key=caefd849fb75d35888b114f2524e7524

//https://api.themoviedb.org/3/movie/now_playing?api_key=caefd849fb75d35888b114f2524e7524&language=pt-B


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;