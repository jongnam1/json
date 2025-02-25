// Todo: 해야할 일 추가 로직 구현
const bFn = (v) =>
  new Promise((ok, no) => {
    setTimeout(() => {
      if (!v) {
        return no("거절");
      }
      if (v.length === 0) {
        return no("할일이 없음");
      }
      ok(v);
    });
  });

// ? 비동기 처리할 함수 만들기
const fb = async () => {
  console.log();
};
// ? 인자 값으로 할일 받아오기
// ? 할 일이 없거나 입력되지 않은 값일 때 거절
// ? 위의 조건 만족하면 통과
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const value = input.value;
  // ! 위에서 만든 함수 호출하고 value 전달하기
  // ! trycatch 구문 사용해서 에러 핸들링 하기
  try {
  } catch (error) {
    console.log(error);
  }
  //! 성공했을 때는 성공 메세지 전송
  alert("성공")

bFn();
