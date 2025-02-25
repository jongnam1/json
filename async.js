const request = new XMLHttpRequest();

const body = document.querySelector("body");

const fetchDb = () => {
  request.open("GET", "database.json"); //Get post
  request.setRequestHeader("Content-Type", "application/json");

  request.send();

  request.onload = (e) => {
    const response = JSON.parse(request.response);

    // 비둘기 함수

    // body.innerText = "asdas"
  };
};
const easyWay = async () => {
  const response = await fetch("http://127.0.0.1:5500/database.json");
  const data = await response.json();

  body.innerText = data.mobile;
};

easyWay();
