function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
 
    background(200);
    image(video, 0, 0, 640, 480);
    circle(30, 30, 70);
    rect(0, 70, 55, 340);
    circle(30, 450, 70);
    rect(70, 425, 500, 55);
    circle(605, 450, 70);
    rect(580, 70, 55, 340);
    circle(605, 30, 70);
    rect(70, 0, 500, 55);
    fill(0,255,0)
}

function takeSnapshot() {
    save('studentName.png');
}
