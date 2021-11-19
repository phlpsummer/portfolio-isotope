
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
const $enter = $("main section article .floatBtn");

$letter.on("mousemove",function(e){
    var boxX = $(this).offset().left;
    var boxY = $(this).offset().top;

    var posX = (e.pageX-boxX)/2;
    var posY = (e.pageY-boxY)/2;

    $(this).children("span").css({
        top: posY, left: (posX - 50)
    });
});

$enter.on("mousemove", function(e){
    var boxX = $(this).offset().left;
    var boxY = $(this).offset().top;

    var posX = (e.pageX-boxX);
    var posY = (e.pageY-boxY);

    $(this).children("span").css({
        top: (posY - 40), left: (posX - 40)
    });
});


// function floating(el,division,minusX,minusY){
//     var boxX = $(el).offset().left;
//     var boxY = $(el).offset().top;

//     var posX = (e.pageX-boxX)/division;
//     var posY = (e.pageY-boxY)/division;

//     $(el).children("span").css({
//         top: (posY - minusX), left: (posX - minusY)
//     });
// }