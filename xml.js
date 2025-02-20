const body = document.querySelector("body")
const button = document.createElement("button")
button.innerText = "유기동물 공고 가져오기"

button.addEventListener("click", async () => {
  console.log("fetching...")

  const key1 =
    "MW5AXazYOfZoz46a1oVy%2FFPMg3H%2BA0o010oRwOwTSOVEyVdSSNAQ%2BZEI6PATXgaXh7GX8YR87w93PK9KBB74jw%3D%3D"
  const key2 =
    "MW5AXazYOfZoz46a1oVy/FPMg3H+A0o010oRwOwTSOVEyVdSSNAQ+ZEI6PATXgaXh7GX8YR87w93PK9KBB74jw=="

  const url = `http://apis.data.go.kr/6300000/animalDaejeonService?serviceKey=${key1}&pageNo=1&numOfRows=1`

  const res = await fetch(url)
  console.log(res)
  const data = await res.json()
  console.log(data)
})

body.append(button)
