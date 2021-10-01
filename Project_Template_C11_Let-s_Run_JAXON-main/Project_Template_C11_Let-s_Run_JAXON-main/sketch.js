var runner, runnerimg;
var track, trackimg;


function preload(){
  //pre-load images
  runnerimg = loadAnimation("Runner-1.png", "Runner-2.png");
  trackimg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(200,300,70,70);
  runner.addAnimation("runner_running", runnerimg);
  runner.scale = 1;

  track = createSprite(200,200,400,400)
  track.addImage("track_tag", trackimg)


}

function draw() {
  background("white");

track.velocityY=-4;

//if(track.y<0){
 // track.y = track.width/2
//}



  drawSprite();
}
