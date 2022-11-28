import { movie, btnFindSomenthing } from './utils.js'
import displayMovie from './catalog.js'

btnFindSomenthing.addEventListener('click', function () {
  movie.classList.remove('hide')

  displayMovie()
})
