import axios from 'axios'

const baseUrl: string = import.meta.env.VITE_ITAKVIM_API_BASE_URL

const iTakvimApi = () =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })

export default iTakvimApi
