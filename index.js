$("h1").addClass("big-title margin");
// $("h1").removeClass("big-title");

// console.log($("h1").hasClass("big-title"));

// $("a.bing").attr("href","https://www.baidu.com");

$("h1").click(function(){
  $("button").css("color","pink");
})

$("body").keypress(function(event){
  $("h1").text(event.key);
})

$("h1").on("mouseover",function(){
  $("h1").css("color","pink");
})
