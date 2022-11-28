import {   
  moviePoster,
  movieTitle,
  movieSynopsis,
  moviePlatform
} from "./utils.js"

let randomNumber

export default function displayMovie() {
  const movies = [
    {
      poster:
        'https://rollingstone.uol.com.br/media/uploads/jenna-ortega_gallery-single_0258r2c.jpg',
      title: 'Wednesday',
      synopsis:
        "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart and solve the mystery that embroiled her parents.",
      platform: './assets/icons8-netflix-desktop-app.svg'
    },
    {
      poster: 'https://preview.redd.it/jruq7e9qck881.jpg?width=640&crop=smart&auto=webp&s=7bef2db24fbb91f0a2e0794b87aa00986edbaa4e',
      title: 'The Batman',
      synopsis: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      platform: './assets/icons8-hbo-max.svg'
    },
    {
      poster: 'https://i.pinimg.com/originals/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg',
      title: 'Interstellar',
      synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      platform: './assets/icons8-hbo-max.svg'
    },
    {
      poster: 'https://i.pinimg.com/originals/1c/bd/98/1cbd9806f6b4864c993295fc79a8ea6a.jpg',
      title: 'E.T. the Extra-Terrestrial',
      synopsis: "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
      platform: './assets/icons8-amazon-prime-video.svg'
    },
    {
      poster: 'https://i.ebayimg.com/images/g/jiYAAOSwxp9W62C0/s-l1600.jpg',
      title: 'Kill Bill: Vol. 1',
      synopsis: "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
      platform: './assets/icons8-amazon-prime-video.svg'
    },
    {
      poster: 'https://cdn.shopify.com/s/files/1/0549/5835/8762/products/s-l1600_4f7fe996-3901-4bf7-8d05-aa9f401a6bb8.jpg?v=1641655707',
      title: 'The Suicide Squad',
      synopsis: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      platform: './assets/icons8-hbo-max.svg'
    },
    {
      poster: 'https://cdn.cinematerial.com/p/297x/dp9l7shl/hereditary-movie-poster-md.jpg?v=1523296232',
      title: 'Hereditary',
      synopsis: "When Ellen, the matriarch of the Graham family, passes away, her daughter’s family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
      platform: './assets/icons8-hbo-max.svg'
    },
    {
      poster: 'https://www.aceprensa.com/wp-content/uploads/2022/10/monstruo-la-historia-de-jeffery-dahmer.jpg',
      title: 'Dahmer',
      synopsis: "Across more than a decade, 17 teen boys and young men were murdered by serial killer Jeffrey Dahmer. How did he evade arrest for so long?",
      platform: './assets/icons8-netflix-desktop-app.svg'
    },
    {
      poster: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dev6q4t-dba88ea3-0230-42a9-aa7d-5adef2f50c23.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGV2NnE0dC1kYmE4OGVhMy0wMjMwLTQyYTktYWE3ZC01YWRlZjJmNTBjMjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h0aoBPlOlH3k6OUvw8dYe4FTWOVqWBcfwNY1KwhbZYo',
      title: 'Encanto',
      synopsis: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto.",
      platform: './assets/icons8-disney-plus.svg'
    },
    {
      poster: 'https://i.redd.it/x755amqm38j31.jpg',
      title: 'Joker',
      synopsis: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      platform: './assets/icons8-hbo-max.svg'
    },
    {
      poster: 'https://wallpapers.com/images/high/freaky-friday-switched-poster-gaooin9obj49utnn.jpg',
      title: 'Freaky Friday',
      synopsis: "An overworked mother and her daughter do not get along. When they switch bodies, each is forced to adapt to the other's life for one freaky Friday.",
      platform: './assets/icons8-disney-plus.svg'
    },
    {
      poster: 'https://i.pinimg.com/originals/ca/04/89/ca04898e45dbcae4ca436c30db9c7516.jpg',
      title: 'Pulp Fiction',
      synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      platform: './assets/icons8-amazon-prime-video.svg'
    },
    {
      poster: 'https://i.pinimg.com/originals/4c/80/ac/4c80ac0ccf18e1a198bc6b4120a43a79.jpg',
      title: 'Home Alone',
      synopsis: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
      platform: './assets/icons8-disney-plus.svg'
    },
    {
      poster: 'https://artfiles.alphacoders.com/975/97511.jpg',
      title: 'Edward Scissorhands',
      synopsis: "An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.",
      platform: './assets/icons8-disney-plus.svg'
    },
    {
      poster: 'https://i.pinimg.com/736x/58/b1/13/58b113b3bc19603b491caefb70e51963.jpg',
      title: 'Get Out',
      synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      platform: './assets/icons8-netflix-desktop-app.svg'
    },
    {
      poster: 'https://3.bp.blogspot.com/-xB-NUTAHlHw/Vz1VlpK3AYI/AAAAAAABYrM/i9ccC0FXhKs0M9FWwzDH9DtPbmSrYVq3gCLcB/s1600/Vance-Kelly-The-Witch-Movie-Poster-2016-Hero-Complex-Gallery.jpg',
      title: 'The Witch',
      synopsis: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession.",
      platform: './assets/icons8-amazon-prime-video.svg'
    },
    {
      poster: 'https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1570011057/content-items/003/309/511/strangerthings-original.jpg?1570011057',
      title: 'Stranger Things',
      synopsis: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
      platform: './assets/icons8-netflix-desktop-app.svg'
    },
    {
      poster: 'https://cdn.europosters.eu/image/1300/art-photo/harry-potter-with-hedvig-art-i122160.jpg',
      title: 'Harry Potter',
      synopsis: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      platform: './assets/icons8-hbo-max.svg'
    },
    {
      poster: 'https://lumiere-a.akamaihd.net/v1/images/au_20cs_fantasticmrfox_textless_movie_poster_932a6452.jpeg',
      title: 'Fantastic Mr. Fox',
      synopsis: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      platform: './assets/icons8-disney-plus.svg'
    },
    {
      poster: 'https://img.elo7.com.br/product/original/265F027/big-poster-filme-la-la-land-lo01-tamanho-90x60-cm-poster-de-filme.jpg',
      title: 'La La Land',
      synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      platform: './assets/icons8-hbo-max.svg'
    },
    {
      poster: 'https://picfiles.alphacoders.com/118/118108.jpg',
      title: 'Ratatouille',
      synopsis: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
      platform: './assets/icons8-disney-plus.svg'
    },
    {
      poster: 'https://1.bp.blogspot.com/-WSiNwWSJaMw/YNU5vdzgj1I/AAAAAAACwao/1lxSsGp5h3wqJbypO--D_l-A9YXqSyjDgCLcBGAsYHQ/s733/Filme%2BDe%2BRepente%2B30%2B%25282004%2529.jpg',
      title: '13 Going on 30',
      synopsis: "A girl makes a wish on her thirteenth birthday, and wakes up the next day as a thirty-year-old woman.",
      platform: './assets/icons8-netflix-desktop-app.svg'
    },
    
  ]

  numberGenerator()

  moviePoster.setAttribute('src', movies[randomNumber].poster)
  movieTitle.innerHTML = movies[randomNumber].title
  movieSynopsis.innerHTML = movies[randomNumber].synopsis
  moviePlatform.setAttribute('src', movies[randomNumber].platform)
}

function numberGenerator() {
  randomNumber = Math.round(Math.random() * 21)
}