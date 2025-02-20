const form = document.querySelector("form")
const input = document.querySelector("input")

const body = document.querySelector("body")
const p = document.createElement("p")
const ul = document.createElement("ul")
p.innerText = "Loading..."

body.append(p, ul)

let furnitures = []
const renderFurniture = () => {
  ul.innerHTML = null
  furnitures.forEach((furniture) => {
    const li = document.createElement("li")
    li.innerText = furniture
    ul.appendChild(li)
  })
}

//! Furniture: init함수 비동기 함수로 만들기
const init = () => {
  p.innerText = "Loading..."
  const url = "http://localhost:5500/furnitures.json"

  // Furniture: 위의 url 사용하여 fetch 함수 호출하고 return 값 res에 저장하기

  // Furniture: json 함수 사용해서 data 에 저장하기

  // Furniture: furnitures 를 data로 바꾸기
  //? Tip: let items = []
  //?      const newItems = ['a', 'b']
  //?      items = newItems

  p.innerText = null
  renderFurniture()
}

init()

//! 추가 로직구현하기
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const value = input.value

  //Furniture: 아무것도 입력안했을 때 예외처리하기

  //Furniture: 뭔가 입력했다면 furnitures 에 추가하기
  //? Tip: push/unshift함수 사용하면 쉬움

  //! renderFurnitures함수 호출하기

  //
})
