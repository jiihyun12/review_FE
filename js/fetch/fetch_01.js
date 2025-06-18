async function fetchDatas() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments") 
    const datas = await response.json();
    console.log(datas);
    return datas;   
}

fetchDatas();

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(console.error())