var numofkeys = document.querySelectorAll("button").length;

for (var i = 0; i < numofkeys; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "a":
      var do4 = new Audio('sounds/do4.mp3');
      do4.play();
      break;
    case "s":
      var re4 = new Audio('sounds/re4.mp3');
      re4.play();
      break;
    case "d":
      var mi4 = new Audio('sounds/mi4.mp3');
      mi4.play();
      break;
    case "f":
      var fa4 = new Audio('sounds/fa4.mp3');
      fa4.play();
      break;
    case "g":
      var sol4 = new Audio('sounds/sol4.mp3');
      sol4.play();
      break;
    case "h":
      var la4 = new Audio('sounds/la4.mp3');
      la4.play();
      break;
    case "j":
      var si4 = new Audio('sounds/si4.mp3');
      si4.play();
      break;
    case "k":
      var do5 = new Audio('sounds/do5.mp3');
      do5.play();
      break;
      case "w":
        var dod4 = new Audio('sounds/dod4.mp3');
        dod4.play();
        break;
      case "e":
        var red4 = new Audio('sounds/red4.mp3');
        red4.play();
        break;
      case "t":
        var fad4= new Audio('sounds/fad4.mp3');
        fad4.play();
        break;
      case "y":
        var sold4 = new Audio('sounds/sold4.mp3');
        sold4.play();
        break;
      case "u":
        var lad4 = new Audio('sounds/lad4.mp3');
        lad4.play();
        break;

    default:
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
