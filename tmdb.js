const imgUrl = "https://image.tmdb.org/t/p/w500"
const api_key = "25db6ff26e8517fd46c2ee67944fa068"

const body = document.querySelector("body")

const button = document.createElement("button")
const h1 = document.createElement("h1")
const ul = document.createElement("ul")

h1.innerText = "Loading..."

let movies = []

button.innerText = "영화 가져오기"

//!그려주기 paint rendering
const renderMovies = () => {
  ul.innerHTML = null //* 초기화
  movies.forEach((movie) => {
    const img = document.createElement("img")
    const p = document.createElement("p")
    const li = document.createElement("li")

    p.innerText = movie.title
    img.src = imgUrl + movie.backdrop_path

    li.append(p, img) //! 태그안에 태그를 넣어주는 작업

    li.addEventListener("click", () => {
      console.log(movie)
    })

    ul.append(li)
  })
}

//! 비동기 함수
const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`

  //! try catch
  //! try {} 안에는 요청
  //! catch (error){} 안에는 에러 처리

  try {
    const res = await fetch(url)
    const data = await res.json()

    if (!data.success && data.status_code) {
      console.log(data)
      return alert(data.status_message)
    } else {
      movies = data.results
    }

    renderMovies()
  } catch (error) {
    console.log(error)
  }

  h1.innerText = null
}

button.addEventListener("click", () => {
  console.log("hello")
  fetchMovies() //! 함수호출하기: 함수명()
})

body.append(button, h1, ul)
