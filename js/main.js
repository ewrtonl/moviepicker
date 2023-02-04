import {
  movie,
  btnFindSomenthing,
  addMovie,
  bookmark,
  btnBookmark,
  principalClass,
  btnCloseBookmark
} from './utils.js'
import { displayMovie, watchlist, bookmarkMovies } from './catalog.js'

btnFindSomenthing.addEventListener('click', function () {
  movie.classList.remove('hide')

  displayMovie()
})

addMovie.addEventListener('click', function () {
  watchlist()
})

btnBookmark.addEventListener('click', function () {
  principalClass.classList.add('hide')
  bookmark.classList.remove('hide')

  bookmarkMovies()
})

btnCloseBookmark.addEventListener('click', function () {
  bookmark.classList.add('hide')
  principalClass.classList.remove('hide')
})
