import axios from 'axios'

const KEY = 'AIzaSyB2r7V8LYCHZzuZxvw-ev8R7GUhyMiv6E8'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async () => {
  return await youtube.get('videos', { 
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', { 
    params: {
      ...params,
      id
    }
  })
}