import axios from 'axios';
const KEY = 'AIzaSyD8SM2wS2f2Fs4X66Efi012ROPlVP4rmsA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});