var imgs=Array.from(document.querySelectorAll(".item img"));
var outBox=document.getElementById("outerBox");
var close=document.getElementById("close");
var inBox=document.getElementById("innerBox");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var currIndex=0;


for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(event){
    outBox.style.display="flex";
    var imgSrc=event.target.getAttribute("src")
    inBox.style.backgroundImage="url("+imgSrc+")"
    currIndex=imgs.indexOf(event.target);
    })
}


close.addEventListener("click",closeElement)
function closeElement(){
    outBox.style.display="none";
}


next.addEventListener("click",nextElement)
function nextElement(){
    currIndex++;
    if(currIndex==imgs.length){
        currIndex=0;
    }
    var imgSrc=imgs[currIndex].getAttribute("src");
    inBox.style.backgroundImage=("url("+imgSrc+")");
}


prev.addEventListener("click",prevElement);
function prevElement(){
    currIndex--;
    if(currIndex<0){
        currIndex=imgs.length-1;
    }
    var imgSrc=imgs[currIndex].getAttribute("src");
    inBox.style.backgroundImage=("url("+imgSrc+")");
}

document.addEventListener("keyup",function(event){
    console.log(event);
    if(event.code=="ArrowRight"){
        nextElement()
    }
    else if(event.code=="ArrowLeft"){
        prevElement()
    }
    else if(event.code=="Escape"){
        closeElement()
    }
})
