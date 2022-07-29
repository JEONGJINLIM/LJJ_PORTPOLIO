const main = document.querySelector("section");
const key = "AIzaSyDL7eLWDUNhyCoKpLo1Zllo0Ci2oYZNVj8";
const playlistId = "PL-onxw7JJHKFNC73YrTMbZUcR2_1biJUV";
/*"PL-onxw7JJHKGUO8scyD2PBe5SfKTLTfwD";*/
const num = 4;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

//​const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`
/*createList(url);*/

fetch(url)
.then(data=>{
    return data.json();
})
.then(json=> {
    console.log(playlistId);
    //아이템선언 후 제이슨으로 아이템을 받음
    const items = json.items;
    //제이슨으로 받은 아이템을 result라는 결과값으로 정의해 보여줌
    let result = "";
    
    //반복문으로 반복적으로 제이슨의 아이템을 넣어준다.
    items.forEach(item => {
        
        //선언 후 유튜브 영상 내 타이틀(제목을) 넣음
        let desc = item.snippet.description; //선언 후 영상내 설명글들 받기 위한 공간을 만듬
        let date = item.snippet.publishedAt.split("T")[0];
        //영상내 publishedAt 시간을 받아 T를 기준으로 나눔

        let titl = item.snippet.title;
        if(titl.length > 30) titl = titl.substr(0,30)+"..."; //h2만 정의



            result += `
            <article>
                <a class="pic" href="#" data-vid="${item.snippet.resourceId.videoId}">
                    <img src="${item.snippet.thumbnails.default.url}">
                </a>
                <div class="con">
                    <h2>${titl}</h2>
                    <p>${desc}</p>
                    <span>${date}</span>
                </div>
            (/article)    
            `;
            console.log(items)
        });

    main.innerHTML = result;

})

console.log(result);






































/*

main.addEventListener("click", e=>{
    e.preventDefault();
    if(!e.target.closest("a")) return;
    createPop(e);
});
   

document.body.addEventListener("click",e=>{
    closePop(e);    
})


function createList(url){
    fetch(url)
    .then(data=>{
        return data.json();
    })

    .then(json=>{
        console.log(json.items);

        let items = json.items;

        let result = "";

        items.forEach(item=>{

            let tit = item.snippet.title; //div class con h2 자리에 있던것
            let desc = item.snippet.description;//div class con h2 자리에 있던것
            let time = item.snippet.publishedAt.split("T")[0];//div class con span 자리에 있던것

            /*let result = txt1.substr(8,13); //apple, melon

            if(tit.length > 50) tit = tit.substr(0,50)+"...";
            if(desc.length > 150) desc = desc.substr (0,150)+"...";
        if (time.length > 10) time = time.substr (0.10)+"...";



        result += `
                <inner>
                    <article>
                        <a class="pic" href="#" data-vid=${item.snippet.resourceId.videoId}>
                            <img src="${item.snippet.thumbnails.default.url}"></a>
                        <div class="con">
                            <h2>${tit}</h2>
                            <p>${desc}</p>
                            <span>${time}</span>
                    </article>
                </inner>
        `;
    })
    

    main.innerHTML = result;
});

};

function createPop(e){

    let vidId = e.target.parentElement.getAttribute("data-vid");
    console.log(vidId);

    let pop = document.createElement("aside");
    pop.innerHTML = `<iframe src="https://www.youtube.com/embed/${vidId}"  frameborder="0" allowfullscreen width="100%" height="100%"></iframe>
    <span class="close">CLOSE</span>
    `;
    document.body.append(pop);
};



function closePop(e){
    const pop = document.querySelector("aside");
    if(pop){
        const close = pop.querySelector("span");
        if(e.target == close) pop.remove();
    }
}*/