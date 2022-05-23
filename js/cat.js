class Cat extends Animal {
  constructor(x, y) {
    super(x, y);
    this.speedX = Math.floor(Math.random() * 2) + 2;
    this.speedY = Math.floor(Math.random() * 2) + 2;
  }
  display() {
    push();

    translate(this.x, this.y);
    scale(0.2);

    //head
    stroke(60, 60, 60);
    fill(245, 216, 121);
    ellipse(180, 130, 200, 175);
    //body
    stroke(245, 216, 121);
    beginShape();
    fill(245, 216, 121);
    vertex(190, 330);
    bezierVertex(280, 330, 285, 340, 190, 175);
    vertex(190, 330);
    bezierVertex(100, 330, 105, 330, 190, 175);
    endShape();
    stroke(0);
    line(190, 325.5, 190, 200);
    //eyes
    fill(255, 255, 255);
    ellipse(140, 140, 95, 110);
    ellipse(240, 140, 95, 110);
    fill(0, 0, 0);
    ellipse(144, 140, 40, 45);
    ellipse(236, 140, 40, 45);

    //ears
    stroke(189, 146, 99);
    beginShape();
    vertex(92, 160);
    bezierVertex(50, 70, 40, 40, 150, 60);
    endShape();

    beginShape();
    vertex(288, 160);
    bezierVertex(330, 70, 340, 40, 230, 60);
    endShape();

    stroke(189, 146, 99);
    fill(189, 146, 99);
    beginShape();
    vertex(92, 160);
    bezierVertex(60, 80, 50, 40, 140, 90);
    endShape();

    beginShape();
    vertex(290, 160);
    bezierVertex(330, 70, 330, 40, 250, 90);
    endShape();

    //eyes
    fill(253, 249, 202);
    ellipse(140, 140, 95, 110);
    ellipse(240, 140, 95, 110);
    fill(0);
    ellipse(144, 140, 45, 55);
    ellipse(236, 140, 45, 55);
    //mouth
    fill(0, 0, 0);
    ellipse(190, 190, 20, 15);

    //hands
    stroke(86, 54, 33);
    fill(255, 255, 255);
    beginShape();
    vertex(190, 327);
    bezierVertex(165, 330, 165, 310, 160, 265);
    endShape();
    line(190, 327, 190, 265);

    stroke(86, 54, 33);
    fill(255, 255, 255);
    beginShape();
    vertex(192, 322);
    bezierVertex(210, 340, 220, 320, 225, 265);
    endShape();
    line(190, 325, 195, 260);

    //tail
    stroke(0);
    triangle(88, 275, 116, 272, 100, 272);
    triangle(89, 278, 120, 310, 116, 276);
    triangle(126, 290, 123, 300, 116, 276);
    stroke(0);
    arc(100, 270, 30, 30, (4 * PI) / 4, 0);

    beginShape();
    vertex(85, 276);
    bezierVertex(90, 290, 95, 300, 120, 310);
    30;

    fill(245, 216, 121);
    stroke(0);
    beginShape();
    vertex(120, 275);
    bezierVertex(118, 272, 120, 290, 130, 290);
    endShape();
    pop();
  }
}
