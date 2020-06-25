  let sketch = function(p) {
    p.setup = function(){
      p.createCanvas(400, 400);
      p.background(0);
      p.fill(255);
      p.ellipse(p.width/2, p.height/2, p.width/3, p.height/3);
    }
  };
  new p5(sketch, 'container');