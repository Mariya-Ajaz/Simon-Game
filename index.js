var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var userClickedPattern=[];

var i=0;
var level=0;
var start=false;
  

  $(document).keydown(function starting() {
    if(!start){  $("h1").text("Level 0");
    gamePattern=[];
    userClickedPattern=[];
    newSequence();
    start=true;
  }
   });
  



$(".btn").on("click",function () {

    var userChosenColor=$(this).attr("id");

   i= answer(userChosenColor,i);

    if (i>=gamePattern.length) {
      i=0;
      newSequence();
    }
  
  });
  




function newSequence() {
    
  $("h1").text("Level "+ level++);
    var randomNumber=Math.floor(Math.random()*4);

    var randomChosenColor=buttonColors[randomNumber];
   
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


    playSound(randomChosenColor);
  
 
}



function playSound(name) {
  

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
 
}

function animatePress(currentColour) {

  $("#"+currentColour).addClass("pressed");

  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
    
   },100);
  
 

}



function answer(ans,i) {

  if(gamePattern[i]==ans){
    userClickedPattern.push(ans);
    playSound(ans); 
    animatePress(ans);
    ++i;
   return i;

  }
  

  else{

   
    playSound("wrong");
    animatePress();
    


    $("body").addClass("game-over");

        setTimeout(function() {
   $("body").removeClass("game-over");
    
     },200);
     $("h1").text("Game Over, Press Key To Restart"); 
        
     start=false;
     i=0;
     level=0;
  return i;
   
}

}