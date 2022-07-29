const btnCall = document.querySelector(".btnCall");
/*const menuMo = document.querySelector("menuMo");*/ 


console.log(btnCall);


const wrap =document.querySelector(".wrap");
console.log(wrap)

btnCall.onclick =function(e)
{
    e.preventDefault();

    btnCall.classList.toggle("on");
    /*menuMo.classList.toggle("on");*/ 
}


/////////////////////////////////////////////
