const body = document.body
const button = document.createElement("button")
button.innerText = "유기동물 살리기"
const h1 = document.createElement("h1")

const loading = document.createElement("div")
loading.innerHTML = `<p>Loading...</p>`

const onLoading = () => {
  loading.className = "loading on"
}

const onDone = () => {
  loading.className = "loading off"
}
h1.innerText =
  "매년 11만 이상의 유기동물이 발생하고 그 중 80%는 안락사 된다는 사실, 알고 계신가요?"

const base_url =
  "http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic"
const key =
  "MW5AXazYOfZoz46a1oVy%2FFPMg3H%2BA0o010oRwOwTSOVEyVdSSNAQ%2BZEI6PATXgaXh7GX8YR87w93PK9KBB74jw%3D%3D"

const targets = [
  "desertionNo",
  "filename",
  "happenDt",
  "happenPlace",
  "kindCd",
  "age",
  "colorCd",
  "weight",
  "noticeNo",
  "noticeSdt",
  "noticeEdt",
  "popfile",
  "processState",
  "sexCd",
  "neuterYn",
  "specialMark",
  "careNm",
  "careTel",
  "careAddr",
  "orgNm",
  "chargeNm",
  "officetel",
]

let animals = []
const fetchAnimals = async () => {}

const ul = document.createElement("ul")
const renderAnimals = () => {}

button.addEventListener("click", () => {})

const pages = document.createElement("ul")
pages.style.display = "flex"
pages.style.columnGap = "10px"

let buttons = Array.from({ length: 5 }, () => document.createElement("button"))

buttons.forEach((btn, index) => {})

body.append(loading, h1, button, ul, pages)
