import axios from 'axios';

const KEY = 'AIzaSyCnKwn2w4fEBKLFLyZTL8eTRSsWrqyMQJY';

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3/',
params:{
    part:'snippet',
    maxResults:5,
    key:KEY
}

});