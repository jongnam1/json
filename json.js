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

fetchData()

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

fetchFineDust()
