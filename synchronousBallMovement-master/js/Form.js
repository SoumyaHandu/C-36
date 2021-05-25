class Form{

constructor(){
 
    
}

display(){

var title = createElement('h2')
title.html("Car racing game");
title.position(450,100);  
var input = createInput("NAME");
var button = createButton('PLAY');
var greeting = createElement('h3');
input.position(450,260);

button.position(550,350);
button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount = playerCount + 1;
player.update(name);
player.updateCount(playerCount);
greeting.html("HELLO: " + name)
greeting.position(450,260);
})

}
   
}