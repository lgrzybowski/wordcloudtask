import fetch from 'node-fetch'

function fetchData () {
  return new Promise((resolve) => {
    const DATA_URL = 'https://gist.githubusercontent.com/grahamscott/1186a963e64a10c6d89e/raw/c69273cd719ee07356064202ac3c81dae023d8e4/topics.json';

    return fetch(DATA_URL)
            .then(response => response.json())
            .then(json => json.topics.sort((a, b) => b.volume - a.volume))
            .then(data => {
              resolve(data)
            })
            .catch(error => { throw new Error(error) })
  })
}

module.exports = {
  fetchData
};
