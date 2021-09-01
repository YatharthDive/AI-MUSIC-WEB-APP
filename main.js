image=""
song=""
function preload(){
    song=loadSound("music.mp3")
    
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    v1=createCapture(VIDEO);
    v1.hide()
    //document.getElementById("songimage1").src=image;
}
function draw(){
    image(v1,0,0,600,500)
}
function play(){
    song.play();
}