leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
image=""
song=""
function preload(){
    song=loadSound("Money Hiest.mp3")
    
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    v1=createCapture(VIDEO);
    v1.hide()
    posenet=ml5.poseNet(v1,modelLoaded)
    posenet.on("pose",gotPoses)
    document.getElementById("songimage1").src=image;
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        righWristY=results[0].pose.rightWrist.y;
    }
}
function modelLoaded() {
    console.log("modelLoaded")
}

function draw(){
    image(v1,0,0,600,500)
}       
function play(){
    song.play();
    song.setVolume(1)
    song.rate(1)
    image="Money Hiest image.jpg"
    document.getElementById("songimage1").src=image;
    document.getElementById("song").innerHTML="Playing Money Heist";
}