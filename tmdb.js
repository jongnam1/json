const body = document.querySelector("body")

const button = document.createElement("button")
const h1 = document.createElement("h1")
h1.innerText = "Loading..."
const api_key = "25db6ff26e8517fd46c2ee67944fa068"

let movies = []

const fetchMovies = async () => {
  h1.innerHTML = "Loading..."
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
  const res = await fetch(url)
  if (!res.ok) {
    console.log(res)
    return alert(res.statusText)
  }

  const data = await res.json()
  movies = data.results
  h1.innerHTML = null
}

fetchMovies()

const ul = document.createElement("ul")
const renderMovies = () => {
  console.log(movies[0])
  ul.innerHTML = null
  movies.forEach((movie) => {
    const li = document.createElement("li")

    const img = document.createElement("img")
    const p = document.createElement("p")
    p.innerText = movie.title
    const imgUrl = "https://image.tmdb.org/t/p/w500"
    img.src = imgUrl + movie.backdrop_path

    li.append(p, img)
    ul.append(li)
  })
}

button.addEventListener("click", () => {
  console.log("fecth tmdb movies")
  renderMovies()
})

button.innerText = "영화정보 가져오기"

body.append(button, h1, ul)
