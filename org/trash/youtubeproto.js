const main = document.querySelector("main"); //유튜브 scss 파일에서 main 찾기
const key = "AIzaSyDL7eLWDUNhyCoKpLo1Zllo0Ci2oYZNVj8"; //유튜브 내 API키
const playlistId = "PL-onxw7JJHKFNC73YrTMbZUcR2_1biJUV";//플리 아이디
const num = 4; //유튜브내 재생목록은 4개

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

/*function createList(url){*/
fetch(url)
.then(data=>{
    return data.json();

})


.then(json=>{
    console.log(json.items);
})
    /*
    let items = json.items;//items 정의 (동영상들)
    
    let result ="";

    items.forEach(item=>{

        let titl = item.snippet.title;
        let desc = item.snippet.description;
        let time = item.snippet.publishedAt.split("T")[0];

    result += `
            <article>
                <a claas="pic" href="#" data-vid=${item.snippet.resourceId.videoId}>
                    <img src="${item.snippet.thumbnails.default.url}"></a>
                <div class="con">
                    <h2>${titl}</h2>
                    <p>${desc}</p>
                    <span>${time}</span>
            </article>
    `;    
    })
    main.innerHTML = result;
 //url 배열생성*/
/*
main.addEventListner("click",e=>{
    e.preventDefault();
    createPop
});
*/
/*console.log(url);
*/
//json 호출 함수



