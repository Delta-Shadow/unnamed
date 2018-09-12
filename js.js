let SIZE = 20;
let roller = 0;

let lines = [];

let mX = 0; let mY = 0;
let oX = 0; let oY = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    stroke(150);
    noFill();
    strokeWeight(5);
    
    main(0, 0, width, height);
}

function draw() {
    background(0);

    push();

    translate(oX, oY);
    scale(20);

    for (let i in lines) {
        line(lines[i].fx, lines[i].fy, lines[i].lx, lines[i].ly);
    }

    pop();
}

function main(x1, y1, x2, y2) {
    if (x2 - x1 <= SIZE || y2 - y1 <= SIZE) {return}

    let x = snap(random(x1, x2), SIZE);
    let y = snap(random(y1, y2), SIZE);

    if (x2 - x1 >= y2 - y1) {
        // X-Direction Greater
        // Vertical Split
        lines.push({fx: x, fy: y1, lx: x, ly: y});
        lines.push({fx: x, fy: y + SIZE, lx: x, ly: y2});
        main(x1, y1, x, y2);
        main(x, y1, x2, y2);

    } else {
        // Y-Direction Greater
        // Horizontal Split
        lines.push({fx: x1, fy: y, lx: x, ly: y});
        lines.push({fx: x + SIZE, fy: y, lx: x2, ly: y});
        main(x1, y1, x2, y);
        main(x1, y, x2, y2);
    }
}

function snap(n, i) {
    if (n % i > i/2) {return ((floor(n/i)*i) + i)} else if (n % i <= i/2) {return (floor(n/i)*i)}
}

function touchStarted() {
    mX = mouseX; mY = mouseY;
}

function touchMoved() {
    oX += (mouseX - mX);
    oY += (mouseY - mY);
    if (oX > 0) {oX = 0}
    if (oY > 0) {oY = 0}
}
