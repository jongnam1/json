#JSON
JavaScript Object Notation 약자
js에서 객체에 담아두는 값을 문자화 해서 담아주는 방법 -용량을 정말 약간 더 줄일 수 있다고 전해짐 -지금까지 많은 개발자들이 JSON 형태로 자료를 저장해둠 -내가 자료들을 가져올 떄 써야만 함

## JSON 자료만드는 법

1. 무조건 {}로 시작
2. 자료값은 무조건 ""안에 담음 ''안됨
3. = 안쓰고 : 로 값을 할당해줌.
   - 자바스크립트에서 자료값 주는 문법과 동일 문자열 "", 숫자0123, 객체 {}, 배열[]
     null은 동일하게 null
     undefined 값은 줄 수 없음
     -boolean 타입도 그대로 쓸수 있음 true/false
4. json 파일은 문자열로 저장됨
5. 가져올 때 문자열로 가져오고 문자열을 객체로 변환해야 함 그래야 쓸수 있음
   -const request =new XMLhttpRequest()
   -request.open('GET'/'POST','경로')
   -request.setRequestHeader('Content-Type', '자료형태')//
   'application/json'
   -request.send()
   -request.onload = () => {화살표 함수 안에서 작업}

6. 자료 가공하기
   -request.response의 타입은 문자열임 -위의 문자열을 JSON.parse 함수로 꺼내와야 함
   -const response = JSON.parse(request.response) -객체로 나타남

7. fetch 라는 개꿀 함수
8. async await 라는 키워드를 사용해서
   비동기 함수를 작성
9. 단순히 fetch 함수에 주소값을 전달하고 response를 받아오면 됨
   - 이때 const response = await fetch(주소)
10. json함수를 사용해서 response를 가공하면 됨
    - const data = await response.json()

8.비동기 함수

1. async await를 써야 함
   async () => { await code() }
   async function (){await code()}
2. trycatch와 함께 씀
   try 안에 await로 함수 호출하고 정상
   작동하면 그 아래에 실행할 코드를 적어줌
   catch는 애러를 받아오는데 에러코드로 에러 핸들링하고 await로 호출한 함수 아래 코드는 동작하지 않음

3. 비동기 처리하는 함수
4. new Promise 함수로 만듬
5. () => 콜백함수 사용
6. 인자값으로 2개의 함수를 받아옴 -성공했을 떄의 함수 -실패했을 떄의 함수
   -2개의 모든 함수는 어떤 값을 전달할 수 있음
7. 성공했을 때는 const response =await aFn ('asdf) -어떠한 값을 변수에 담아서 가공처리 할 수 있음
8. 실패 했을때는 error 메세지를 처리할 수 있음
9. trycatch 구문을 사용하면 편함
   -try{} 안에는 성공할때의 코드를 작성
   -catch (error){}안에는 실패했을 때의 상황을 코드로 짜면 됨
