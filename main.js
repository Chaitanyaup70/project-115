function preload(){
 image=loadimage("sunglass.png");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.hide()
    }
    function draw(){
        image(camera,0,0,600,400);
    }