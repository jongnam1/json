const service_key = "U01TX0FVVEgyMDI0MDkyNDIxMDcwNjExNTEwODA="

const form = document.querySelector("form")
const fetchXml = async (url, container, targets) => {
  //! /로 주소를 구분함 endpoint
  //Todo 1. url 인자값으로 받기
  const res = await fetch(url)
  console.log(res)
  if (!res.ok) {
    return alert(res.statusText)
  }
  //!   const data = await res.json() json으로 전달받은 데이터만 가공 해줌
  const data = await res.text() //! xml 자료 받아오는 법
  const domParser = new DOMParser()
  const node = domParser.parseFromString(data, "text/xml")
  //Todo: 가져올 태그 이름 확인하기
  //! item
  const items = node.getElementsByTagName(container) //Todo 2. 컨테이너이름 인자값으로 받기
  let cities = []
  //Todo: 가져올 값 이름 확인하기
  //! orgCd, orgdownNm
  for (let city of items) {
    let item = {}
    //Todo 3. targets 인자값으로 받기
    for (let target of targets) {
      item[target] = city.getElementsByTagName(target)[0].textContent
    }
    cities.push(item)
  }
  console.log(cities)
}
form.addEventListener("submit", async (e) => {
  e.preventDefault()
  console.log("form")

  const input = document.querySelector("input")
  const value = input.value

  const url = encodeURI(
    `https://business.juso.go.kr/addrlink/addrLinkApiJsonp.do?countPerPage=20&keyword=${value}&confmKey=${service_key}&firstSort=road`
  )

  fetchXml(url, "juso", ["roadAddr", "zipNo"]).then((data) => console.log(data))
})
