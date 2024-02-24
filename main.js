nose_x=0;
nose_y=0;

function preload(){
mustache=loadImage("mustache.png")

}

function setup(){

canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    
        console.log("x="+ results[0].pose.nose.x);
        console.log("y="+ results[0].pose.nose.y);
    }

}

function modelloaded(){
console.log("modelloaded");

}

function draw(){
image(video,0,0,300,300);
image(mustache,nose_x-25,nose_y-6,50,50)

}

function take_snapshot(){
    save("mynose.png");

}