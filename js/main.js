const $slider = $("main section article .slider");
let sliderNum = 1;

var timer = setInterval(function(){
    goNext();
},2000);

function goNext(){
    if(sliderNum>=4){
       sliderNum=0;
    }

    $slider.find("li").hide();
    $slider.find("li").eq(sliderNum).show();

    setTimeout(function(){
        sliderNum++;
    },500);
}