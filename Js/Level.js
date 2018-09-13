let Lvl = (function() {
    
    let lines = [];

    function makeMaze(x1, y1, x2, y2, SIZE) {
        if (x2 - x1 <= SIZE || y2 - y1 <= SIZE) {return}

        let x = snap(random(x1, x2), SIZE);
        let y = snap(random(y1, y2), SIZE);

        if (x2 - x1 >= y2 - y1) {
            // X-Direction Greater
            // Vertical Split
            lines.push({fx: x, fy: y1, lx: x, ly: y});
            lines.push({fx: x, fy: y + SIZE, lx: x, ly: y2});
            makeMaze(x1, y1, x, y2, SIZE);
            makeMaze(x, y1, x2, y2, SIZE);

        } else {
            // Y-Direction Greater
            // Horizontal Split
            lines.push({fx: x1, fy: y, lx: x, ly: y});
            lines.push({fx: x + SIZE, fy: y, lx: x2, ly: y});
            makeMaze(x1, y1, x2, y, SIZE);
            makeMaze(x1, y, x2, y2, SIZE);
        }
    }

    function snap(n, i) {
        if (n % i > i/2) {return ((floor(n/i)*i) + i)} else if (n % i <= i/2) {return (floor(n/i)*i)}
    }

    function update() {
    }

    function draw() {
        stroke(150);
        strokeWeight(7);
        push();
        scale(7);
        for (let i in lines) {
            line(lines[i].fx, lines[i].fy, lines[i].lx, lines[i].ly);
        }
        pop();
    }

    function run() {
        update(); 
        draw();
    }

    return {
        make: makeMaze,
        run: run,

        getMaze: () => {return lines}
    }

})();
