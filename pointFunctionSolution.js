function Point(x, y) {
    this.x = x;
    this.y = y;

    this.print = function () {
        console.log("(" + this.x + ", " + this.y + ")");
    };

    this.midpoint = function (p2) {
        let midX = (this.x + p2.x) / 2;
        let midY = (this.y + p2.y) / 2;
        return new Point(midX, midY);
    };

    this.scaleTo = function (p2, s) {
        let newX = this.x + (p2.x - this.x) * s;
        let newY = this.y + (p2.y - this.y) * s;
        return new Point(newX, newY);
    };
}

/* Do not change the lines below */
let p1 = new Point(1, 5);
let p2 = new Point(5, 7);
p1.midpoint(p2).print(); // expect (3, 6)
p2.midpoint(p1).print(); // expect (3, 6)

/* Do not change the lines below */
let p3 = new Point(0, 0);
let p4 = new Point(4, 8);
p3.scaleTo(p4, 0.25).print(); // expect (1, 2)
p4.scaleTo(p3, 0.75).print(); // expect (1, 2)
