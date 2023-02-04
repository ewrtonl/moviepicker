import {
  moviePoster,
  movieTitle,
  movieSynopsis,
  pickedMoviePoster,
  rating
} from './utils.js'
import { API_KEY, BASE_URL } from './api.js'

let randomID
let randomPage
let randomCategory
const savedMovies = []

var tvList = 'tv/'
var movieList = 'movie/'

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export function displayMovie() {
  randomPage = Math.floor(Math.random() * 120)

  numberGenerator()

  if (randomCategory === 0) {
    let url = `${BASE_URL}${movieList}popular?${API_KEY}&page=${randomPage}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        moviePoster.setAttribute(
          'src',
          IMG_URL + data.results[randomID].poster_path
        )
        movieTitle.innerHTML = data.results[randomID].title
        movieSynopsis.innerHTML = data.results[randomID].overview
        rating.innerHTML = data.results[randomID].vote_average
      })
  } else {
    let url = `${BASE_URL}${tvList}popular?${API_KEY}&page=${randomPage}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        moviePoster.setAttribute(
          'src',
          IMG_URL + data.results[randomID].poster_path
        )
        movieTitle.innerHTML = data.results[randomID].name
        movieSynopsis.innerHTML = data.results[randomID].overview
        rating.innerHTML = data.results[randomID].vote_average
      })
  }
}

export function watchlist() {

  if (randomCategory === 0) {
    let url = `${BASE_URL}${movieList}popular?${API_KEY}&page=${randomPage}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        savedMovies.push({
          movieName: data.results[randomID].title,
          moviePoster: IMG_URL + data.results[randomID].poster_path
        })

        localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
      })
  } else {
    let url = `${BASE_URL}${tvList}popular?${API_KEY}&page=${randomPage}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        savedMovies.push({
          movieName: data.results[randomID].name,
          moviePoster: IMG_URL + data.results[randomID].poster_path
        })

        localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
      })

  }
}

export function bookmarkMovies() {
  clean()

  pickedMoviePoster.innerHTML = `
    <div>
    <p>🙁 Your list is empty!</p>
    </div>
    `

  const savedMoviesUnduplicated = savedMovies
    .map(e => JSON.stringify(e))
    .reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), [])
    .map(e => JSON.parse(e))

  for (var i = 0; i < savedMoviesUnduplicated.length; i++) {
    pickedMoviePoster.querySelectorAll('div').forEach(div => {
      div.remove()
    })
    var img = document.createElement('img')
    img.src = savedMoviesUnduplicated[i].moviePoster
    document.querySelector('.movies-list').appendChild(img)
  }
}

function clean() {
  pickedMoviePoster.querySelectorAll('img').forEach(img => {
    img.remove()
  })
}

function numberGenerator() {
  randomID = Math.round(Math.random() * 19)
  randomCategory = Math.round(Math.random() * 2)
}