import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://api.test.metacraft.cc',
})
