$(document).ready(function(){
    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".sub-title-text").text(); // 타이핑될 텍스트를 가져온다 
    console.log($(".sub-title-text").text());
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    console.log(typingTxt);
    console.log(typingBool);
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        var tyInt = setInterval(typing,100); // 반복동작 
    } 
    console.log(typingBool);
    function typing(){ 
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
        $(".show-sub-title").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
        typingIdx++; 
        } else{ 
        clearInterval(tyInt); //끝나면 반복종료 
        } 
    }  
});
$(document).on("scroll", function(){
    if ($(document).scrollTop() > 30){
        $(".header").addClass("scroll-down");
    } else {
        $(".header").removeClass("scroll-down");
    }
});
