random()
function random(){
    
    let card = document.querySelectorAll(".card")
    Array.from(card).forEach((item)=>{
        item.style.order=Math.floor(Math.random()*16);
    })
    
};

let cards=document.querySelectorAll(".card")
var isFlipped=false;
var firstCard,secondCard=null;
var counter=0;
yourScore(counter);
function flip(e){
    console.log(e)
    console.log(this)
    this.classList.add("flip")
    audioplay("flip.mp3");
    if (!isFlipped){
        isFlipped=true;
        firstCard=this;

    }
    else{
        secondCard=this;
        if(firstCard.dataset.val!=secondCard.dataset.val)
        check()
    }

    

}
Array.from(cards).forEach((card)=>{card.addEventListener("click",flip);})
function sucess(){    
firstCard.removeEventListener("click",flip)
secondCard.removeEventListener("click",flip)
reset();
setTimeout(()=>{audioplay("sucess.mp3");yourScore(counter);},500)


}

function check(){
if (firstCard.dataset.image==secondCard.dataset.image){
    sucess()
    counter++;
}
else{
    console.log("Failed Try Again !!")
    fail()
}

}

 function fail(){
    setTimeout(function(){firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    audioplay("flip2.mp3")
    reset();
},500)
    
}

function reset(){
firstCard=null;
secondCard=null;
isFlipped=false;
}

function audioplay(s){
    var audio=new Audio(s)
    audio.play();
    audio.volume=0.5;
}

function resetGame(){
    cards.forEach((item)=>{
        if(item.classList.contains("flip"))
        item.classList.remove("flip")
    })
    Array.from(cards).forEach((card)=>{card.addEventListener("click",flip);})
    reset();
    setTimeout(()=>{    
        random()
        counter=0;
        audioplay("flip2.mp3")
        yourScore(counter)
    },300)

}
function yourScore(c){
var text=document.querySelector(".value")
text.innerText=`${c}`
}
