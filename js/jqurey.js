let options ={
    startAngle: -1.55,
    size:170,
    value:0.90,
    fill:{gradient:["#fff", "#fff"]}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress', 
function(event, progress, stepValue){ 
     $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) +"%");
});
 $(".bootstrap .bar").circleProgress({
     value: 0.80,
 });
 $(".js .bar").circleProgress({
    value: 0.60,
});
$(".wp .bar").circleProgress({
    value: 0.80,
});


