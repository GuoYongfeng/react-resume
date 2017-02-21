import axios from 'axios'

export const fetchRepos = ( username ) => {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}
