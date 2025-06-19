$(Document).ready(function(){
    $(button).click(function(){
        $("#img1").fadeToggle();
    });

$("ol li:first").show();

$("h1").on({
    click : function(){
    $(this).css("background-color" ,"red");
},
dblclick : function(){
    $(this).css("background-color" , "lightblue");
}
});
/*$("ol li:first").dblclick(function(){
$(this).hide();
});
$("ol li:last").mouseenter(function(){
    alert("this is a good game");
});*/
$("ol li:first").dblclick(function(){
    alert("this is the best racing game");
});
$("ol li:last").click(function(){
    $(this).hide();
});
$(".img1").click(function(){
    $(this).hide("slow");
});
});