const api_url = "https://api.themoviedb.org/3/movie/popular"
const imgUrl = "https://image.tmdb.org/t/p/w500"
const api_key = "25db6ff26e8517fd46c2ee67944fa068"

const body = document.querySelector("body")

const button = document.createElement("button")
const h1 = document.createElement("h1")
const ul = document.createElement("ul")

h1.innerText = "Loading..."

let movies = []

//! renderMovies 함수 만들기

//! fetchMovies

body.append(button, h1, ul)
