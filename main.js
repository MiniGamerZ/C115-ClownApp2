nose_X = 0
nose_Y = 0

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(475,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been intiated");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        nose_X = results[0].pose.nose.x-15;
        nose_Y = results[0].pose.nose.y-15;
    }
}

function take_snapshot(){
    save('Clown_Image_V2.jpg')
}