
canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_width = 30;
block_height = 30;
var player_object = "";
var block_object = "";


function player_update() {
fabric.Image.fromURL ("player.png",function(Img){
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeigth(140);
player_object.set({
    top: player_y,
    left :player_x
});
canvas.add(player_object);

});
}
function new_image(get_image) {
    fabric.Image.fromURL (get_image,function(Img){
    block_object = Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
        top: player_y,
        left :player_x
    });
    canvas.add(block_object);
    
    });
    }
    window.addEventListener("keydown",Keydown);
    function Keydown(e) {
keypressed = e.keyCode;
 console.log (keypressed);
 if(e.shiftKey == true && keypressed == "80"){
     console.log("p and shift pressed together");
     block_width = block_width + 10;
     block_height = block_height + 10;
     document.getElementById("current_width").innerHTML = block_width ;
     document.getElementById("current_height").innerHTML = block_height ;

 }
 if(e.shiftKey == true && keypressed == "77"){
    console.log("m and shift pressed together");
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML = block_width ;
    document.getElementById("current_height").innerHTML = block_height ;
    
}
if (keypressed == "87"){
    new_image("wall.jpg");
    console.log("w");
}
if (keypressed == "71"){
    new_image("ground.png");
    console.log("g");
    
}
if (keypressed == "76"){
    new_image("light_green.png");
    console.log("l");
}
if (keypressed == "84"){
    new_image("trunk.jpg");
    console.log("t");
}
if (keypressed == "82"){
    new_image("roof.jpg");
    console.log("r");
}
if (keypressed == "89"){
    new_image("yellow_wall.png");
    console.log("y");
}
if (keypressed == "68"){
    new_image("dark_green.png");
    console.log("d");
}
if (keypressed == "85"){
    new_image("unique.png");
    console.log("u");
}
if (keypressed == "67"){
    new_image("cloud.jpg");
    console.log("c");
}
}
