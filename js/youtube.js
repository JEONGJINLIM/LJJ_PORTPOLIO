const wrap = document.querySelector(".wrap");
const key = "AIzaSyDL7eLWDUNhyCoKpLo1Zllo0Ci2oYZNVj8";
const playlistId = "PL-onxw7JJHKFNC73YrTMbZUcR2_1biJUV";
/*"PL-onxw7JJHKGUO8scyD2PBe5SfKTLTfwD";*/
const num = 4;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

//​const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`})*/
createList(url);


wrap.addEventListener("click", e=>{
    e.preventDefault();
    //클릭한 대상이 부모가 a일때만 함수실행 
    //다른 부분을 클릭할 때는 return으로 함수실행하지 않고 중지
    if(!e.target.closest("a")) return; 
    createPop(e);
}); 

//span을 클릭했을 때 팝업 제거 - body에 이벤트 위임 
document.body.addEventListener("click", e=>{
   closePop(e); 
});



function createList(url){
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
        //선언 후 영상내 설명글들 받기 위한 공간을 만듬
        //영상내 publishedAt 시간을 받아 T를 기준으로 나눔

        let titl = item.snippet.title;
        if(titl.length > 65) titl = titl.substr(0,65)+"..."; //h2만 정의
        let desc = item.snippet.description; //desc 정의 후 for문
        if(desc.length > 300) desc =desc.substr(0,300)+"...";
        let date = item.snippet.publishedAt.split("T")[0];
        if (date.length > 10) date.substr(0,10)+"...";

            result += `
                <article>
                <a class="pic" href="#" data-vid="${item.snippet.resourceId.videoId}">
                    <img src="${item.snippet.thumbnails.high.url}">
                </a>
                    <div class="con">
                        <h2>${titl}</h2>
                        <p>${desc}</p>
                        <span>${date}</span>
                    </div>
                </article>
            `;
            console.log(items)
        });

    wrap.innerHTML = result;
    });

}

function createPop(e){
    //클릭한 요소의 부모요소에서 data-vid속성을 찾아서 저장 
    let vidId = e.target.parentElement.getAttribute("data-vid"); 
    console.log(vidId); 
    //aside태그를 생성하여 변수로 저장 
   let pop = document.createElement("aside"); 
   //pop에 컨텐츠 동적으로 넣기 -
   pop.innerHTML = `
                 <iframe  src="https://www.youtube.com/embed/${vidId}"  frameborder="0"  allowfullscreen width="100%" height="100%"></iframe>
                 <span class="close">CLOSE</span>
   `;
   
   //body에 출력 
   document.body.append(pop); 
}


function closePop(e){
    //aside 태그를 찾아서 저장 
    const pop = document.querySelector("aside"); 
    //aside가 있는 상태에서만 
    if(pop){
        //클로즈를 찾아서 변수로 저장하고 
        const close = pop.querySelector("span"); 
        //클릭한 대상이 close일 때만 aside 제거 
        if(e.target == close) pop.remove(); 
    }
}




































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