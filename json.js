// fetch 가져오다
//! fecth // 함수

// 가져오는 것은 보통 함수로 만들어서 처리를 함
//? fetch가져올데이터 이름 예) fetchTodos fecthFoods

// 물리적 거리, 핸드폰, 인터넷 사양, 날씨 0.01초 이상의 딜레이가 무조건 발생
//! 무조건 응답에 대한 결과값이 있음 resolve == ok, reject == no

//! best practice 이렇게 하면 좋은 것

//! async + await 조합
//! try catch 조합

//! 화살표 함수 앞에 async 붙이고 시작
//! function 앞에 async 붙이고 시작

const fetchData = async () => {
  const url = "http://localhost:5500/data.json" //localhost:5500

  const res = await fetch(url)

  // 조건을 걸어서 예외처리

  console.log(res)
  if (!res.ok) {
    return alert(res.statusText)
  }

  const data = await res.json()

  const ul = document.createElement("ul")

  for (let item of data) {
    const li = document.createElement("li")
    li.innerText = item

    ul.append(li)
  } //? === forEach

  document.body.append(ul)
}

// async function fecthD  (){

// }

// fetchData()

const fetchFineDust = async () => {
  const url =
    "http://smartcity.gimhae.go.kr/smart_tour/dashboard/api/publicData/dustSensor"

  const res = await fetch(url)

  if (!res.ok) {
    return alert(res.statusText)
  }

  const data = await res.json() //! object 객체
  console.log(data.data)

  const ul = document.createElement("ul")

  for (let item of data.data) {
    const li = document.createElement("li")
    li.innerText =
      item.name +
      "의 미세먼지 수치는 " +
      item.coordy +
      " ~ " +
      item.coordx +
      " 입니다"

    ul.append(li)
  } //? === forEach

  document.body.append(ul)
}

// fetchFineDust()

const imgUrl = "https://image.tmdb.org/t/p/w500"
const api_key = "25db6ff26e8517fd46c2ee67944fa068"
const apiUrl = "https://api.themoviedb.org/3/movie/popular"

// fetchMovies

const fetchMovies = async () => {
  //! ? 를 써서 파라미터 값을 추가
  //! 여러개의 파라미터를 추가할 때에는 하나의 파라미터 값이 끝난 자리에 & 쓴 뒤 추가하면 됨
  //! 예) key === ?key=keyvalue
  //! 파라미터이름=파라미터값

  const url = `${apiUrl}?api_key=${api_key}` // api 공식문서 참고
  const res = await fetch(url)

  console.log(res)

  //!res.status === 응답코드
  //! 200대 성공
  //! 400대 페이지를 찾을 수 없음 실패
  //! 500대 에러 실패

  if (!res.ok) {
    return alert(res.statusText)
  }

  const data = await res.json()
  console.log(data.results)

  const ul = document.createElement("ul")

  for (let item of data.results) {
    const li = document.createElement("li")

    li.innerHTML = `<p>제목: ${item.title}</p>
                    <p>한줄평: ${item.overview}</p>
                    <p>개봉일: ${item.release_date}</p>
                    <img src=${imgUrl}${item.poster_path} alt=${item.title} />
    `

    ul.append(li)
  } //? === forEach

  document.body.append(ul)
}

// 호출하기

fetchMovies()
