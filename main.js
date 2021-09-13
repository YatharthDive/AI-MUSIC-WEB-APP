leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
scoreRW = 0
image = ""
song1 = ""
song2 = ""
scoreLW = 0
song1_status = ""
song2_status = ""

function preload() {
    song1 = loadSound("Money Hiest.mp3")
    song2 = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    v1 = createCapture(VIDEO);
    v1.hide()
    posenet = ml5.poseNet(v1, modelLoaded)
    posenet.on("pose", gotPoses)
    document.getElementById("songimage1").src = image;
}

function gotPoses(results) {
    if (results.length > 0) {
        //console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        scoreLW = results[0].pose.keypoints[9].score;
        scoreRW = results[0].pose.keypoints[10].score;
        //console.log(scoreLW)
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        righWristY = results[0].pose.rightWrist.y;
    }
}

function modelLoaded() {
    console.log("modelLoaded")
}

function draw() {
    image(v1, 0, 0, 600, 500)
    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();
    fill("blue")
    stroke("blue")
    if (scoreLW > 0.2) {

        circle(leftWristX, leftWristY, 20)
        song2.stop()
        if (song1_status == false) {
            song1.play()
            image = "Money Hiest image.jpg"
            document.getElementById("songimage1").src = image;
            document.getElementById("song").innerHTML = "Playing Money Heist";
        }
    }

    if (scoreRW > 0.2) {

        circle(rightWristX, rightWristY, 20)
        song1.stop()
        if (song2_status == false) {
            song2.play()
            image = "Harry Potter.jpg"
            document.getElementById("songimage1").src = image;
            document.getElementById("song").innerHTML = "Playing Harry Potter";
        }
    }
}

function play() {
    song1.play();
    song1.setVolume(1)
    song1.rate(1)
    image = "Money Hiest image.jpg"
    document.getElementById("songimage1").src = image;
    document.getElementById("song").innerHTML = "Playing Money Heist";
}