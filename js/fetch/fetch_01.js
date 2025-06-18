// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//    .then(response => response.json())
//    .then(json => console.log(json))
//    .catch(console.error())


async function fetchDatas() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts") 
    const datas = await response.json();
    // console.log(datas);
    datas.map((data)=> {
        const card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.margin = "10px";
        card.style.padding = "10px";

        if(data.id >= 5){
            card.style.backgroundColor = "red";
        }

        card.innerHTML = `
            <h3>${data.title}</h3>
        `

        document.body.appendChild(card) 
        // 현재 웹페이지 전체 문서.그 문서 안의 <body> 영역.하위 요소(child)를 추가한다는 메서드(내가 document.createElement('div') 등으로 만들어낸 요소 (JS DOM 객체))
    })
}
fetchDatas();



// 1. fetch() -> 비동기 요청으로 JSON 받아옴
// 2. 받아온 데이터를 map으로 배열 돌렸고(하나씩 추출하기 위해)
// 3. createElement()로 div를 생성했고 (js파일이니까 html 생성을 위해)
// 4. json데이터 안에 있는 id값이 5 이상이라는 조건을 달고 이 조건이 맞으면 BG가 죄다 빨간색으로 바뀌게 변경
// 5. appendChild()로 body에 붙여서 화면에 보이게 처리




