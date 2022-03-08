function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(550, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('white');

    document.getElementById("square_side").innerHTML = "Width And Height of Text will be = " + difference +"px";
    text('Eva', difference);
    textSize(difference);
    fill('black');
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function gotPoses(results) {
   if(results.length > 0)
   {
       console.log(results);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
   }
}
floor() 


