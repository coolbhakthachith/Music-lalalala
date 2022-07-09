Music1="";
Music2="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Music1 = loadSound("Music1.mp3");
    Music2 = loadSound("Music2.mp3");
}

function draw(){
    image(video,0,0,600,530);
}