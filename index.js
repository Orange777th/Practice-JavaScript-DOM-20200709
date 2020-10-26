// ドラムの数を取得
var  numberOfDrumButtons = document.querySelectorAll(".drum").length;

// ボタンが押されたときの処理
for (var i = 0; i < numberOfDrumButtons; i ++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

// キーボードが打たれた時の処理
$(document).keypress(function(){

  makeSound(event.key);
  buttonAnimation(event.key);

});

// キーボードごとに決められた音声を再生
function makeSound(key) {
  
    switch (key) {
      case "a":
        var audio = new Audio("sounds/1.mp3");
        audio.play();
  
        break;
      case "s":
        var audio = new Audio("sounds/2.mp3");
        audio.play();
  
        break;
      case "d":
        var audio = new Audio("sounds/3.mp3");
        audio.play();
  
        break;
      case "f":
        var audio = new Audio("sounds/4.mp3");
        audio.play();
  
        break;
      case "h":
        var audio = new Audio("sounds/5.mp3");
        audio.play();
  
        break;
      case "j":
        var audio = new Audio("sounds/6.mp3");
        audio.play();
  
        break;
      case "k":
        var audio = new Audio("sounds/7.mp3");
        audio.play();
  
        break;

      case "l":
        var audio = new Audio("sounds/8.mp3");
        audio.play();
    
        break;
      default:
        break;
      
    }
}

// ボタンが押された時のアニメーション
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  }, 100);

  

}










