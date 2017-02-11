import axios from 'axios'

export function getGithubRepos( username ){
  return axios.get(`https://api.github.com/users/${username}/repos`)
}
