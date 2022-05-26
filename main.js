noseX=0;
noseY=0;
difference=0;
rightWX=0;
leftWX=0;

function setup(){
    video=createCapture(VIDEO)
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(700,150)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function draw(){
    background("#800080");
    fill('#F90093');
    textSize(difference);
    text('CODE-COBRA',30,300)
}

function modelLoaded(){
    console.log('poseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWX=results[0].pose.leftWrist.x;
        rightWX=results[0].pose.rightWrist.x;
        difference= floor(leftWX-rightWX);
        console.log("leftWX="+leftWX+"rightWX"+rightWX+"difference="+difference);
    }
}

