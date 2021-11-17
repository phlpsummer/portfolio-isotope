
// slider
const $slider = $("main section article .slider");
let sliderNum = 1;

var timer = setInterval(function(){
    goNext();
},2000);

function goNext(){
    if(sliderNum>=4){
       sliderNum=0;
    }

    $slider.find("li").css({opacity:0});
    $slider.find("li").eq(sliderNum).css({opacity:1});

    setTimeout(function(){
        sliderNum++;
    },500);
}

// video
const vid = document.querySelector("main section article .vid");
vid.addEventListener("mouseenter",(e)=>{
    e.currentTarget.querySelector("video").play();
});
vid.addEventListener("mouseleave",(e)=>{
    e.currentTarget.querySelector("video").pause();
});

// floatLetter
const $letter = $("main section article .floatLetter");
$letter.on("mousemove",function(e){
    var boxX = $(this).offset().left;
    var boxY = $(this).offset().top;

    var posX = (e.pageX-boxX)/2;
    var posY = (e.pageY-boxY)/2;

    $(this).children("span").css({
        top: posY, left: (posX - 50)
    });
});