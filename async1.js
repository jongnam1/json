// const d = () => {
//   setTimeout(() => {
//     console.log("d");
//   }, 500);
// };
// const d2 = () =>
//   new Promise((ok, nono) => {
//     setTimeout(() => {
//       console.log("d");
//       return nono("그냥 마음에 안듬");
//       ok();
//     }, 500);
//   });

// const fn = () => {
//   console.log("a");
//   console.log("b");
//   console.log("c");
//   d();
//   console.log("e");
//   console.log("f");
//   console.log("g");
// };

// // fn();
// const fn2 = async () => {
//   console.log("a");
//   console.log("b");
//   console.log("c");

//   try {
//     await d();

//     // d2의 코드가 정상적으로 실행이 되면 그 때 아래 코드를 실행
//     console.log("e");
//     console.log("f");
//     console.log("g");
//   } catch (error) {
//     console.log(error);
//   }
// };

// fn2();

//비동기로 처리할 함수는 new promise로 만듬
//콜백함수 씀 인자값으로 2개 받아옴
//첫번째 인자는 성공했을 떄 쓸 함수
// 두번째 인자는 실패 했을 때 쓸 함수
const addTodo = (todo) =>
  new Promise((ok, no) => {
    setTimeout(() => {
      if (!todo) {
        return no("값이 없음 장난?");
      }
      if (todo.length === 0) {
        return no("마음에 안듬");
      }
      ok(todo);
    }, 200);
  });

//비동기 함수는 async await조합
const fn = async () => {
  console.log("a");
  console.log("b");
  console.log("c");
  console.log("d");

  // ok//resolve 함수에 넣은 값을 return 함.
  // 성공하면 변수에 담아줄 수 있음
  const d = await aFn("e");
  console.log(d);

  try {
    await aFn("f");
    console.log(f);
  } catch (error) {
    console.log(error);
  }
};
fn();


