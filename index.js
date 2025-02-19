let students = []
// Todo: 아래의 함수를 비동기 함수로 만듭니다.

const fetchStudent = () => {
  const url = "http://localhost:5500/students.json"
  //Todo: 위의 url을 사용하여 학생 목록을 가져오세요.

  //Todo: 가공된 학생 정보를 업데이트 하세요
}

const form = document.querySelector("form")

const checkStudent = (student) =>
  new Promise((ok, no) => {
    setTimeout(() => {
      // Todo: 학생이 전달되지 않으면 no
      // Todo: 학생 목록에서 학생 이름 있는지 검사하고 중복된 경우는 no
      // Todo: 성공하면 ok
    }, 300)
  })

// Todo: 아래의 함수 비동기 함수로 만들기
form.addEventListener("submit", (e) => {
  const input = document.querySelector("input")
  const value = input.value

  //Todo: 아래의 함수 trycatch 구문으로 에러 핸들링 하기

  checkStudent()

  //? Tip: 성공했을 때는 성공메세지
  //? Tip: 실패했을 때는 실패메세지
})
