Music1="";
Music2="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
song_name = "";
song_jinglebells="";
song_Paris_Gipsy_Swing="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
   Jingle_Bells = loadSound("Jingle Bells.mp3");
   Paris_Gipsy_Swing = loadSound("Paris Gipsy Swing.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

    song_Jingle_Bells = Jingle_Bells_song.isPlaying();
    console.log(song_Jingle_Bells);

    song_Paris_Gipsy_Swing = Paris_Gipsy_Swing_song.isPlaying();
    console.log(song_Paris_Gipsy_Swing);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Paris_Gipsy_Swing_song.stop();
        if(song_Jingle_bells == false){
            Jingle_bells_song.play();
            document.getElementById("song_id").innerHTML = "Song Name: Jingle_Bells";
        }
        
    }

    if(scorerightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        Jingle_bells_song.stop();
        if(song_Paris_Gipsy_Swing == false){
           Paris_Gipsy_Swing_song.play();
           document.getElementById("song_id").innerHTML = "Song Name: Paris_Gipsy_Swing";
        }
      
    }
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);
        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}