let canvas;

window.addEventListener("resize", () => {canvas.canvas.width = window.innerWidth; canvas.canvas.height = window.innerHeight});
window.addEventListener("orientationchange", () => {canvas.canvas.width = window.innerWidth; canvas.canvas.height = window.innerHeight});

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    stroke(100);
    noFill();

    Lvl.make(0, 0, width, height, 50);
}

function draw() {
    background(0);

    Lvl.run();
}
