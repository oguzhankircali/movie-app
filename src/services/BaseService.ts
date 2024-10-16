import axios from 'axios'

const baseUrl: string = import.meta.env.VITE_TMDB_API_BASE_URL

const api = () =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })

export default api
