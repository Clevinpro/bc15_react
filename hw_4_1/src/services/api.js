import axios from 'axios';
// https://api.themoviedb.org/3/trending/movie/week?api_key=2964dee6f9b3937b53e885a7fa2424ff

const basicUrl = 'https://api.themoviedb.org/3';
const key = '2964dee6f9b3937b53e885a7fa2424ff';

export const getPopular = () =>
 axios.get(`${basicUrl}/trending/movie/week?api_key=${key}`)


//  (id)
// "/movie/{movie_id}"
