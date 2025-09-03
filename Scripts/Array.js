class CClass {
  constructor(X, Y, r, g, b, SCALE) {
    this.x = X;
    this.y = Y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.s = SCALE;
  }
  
  show() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.s);
  }
  
}
