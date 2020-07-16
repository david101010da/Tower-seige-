class Bird  {
    constructor(x,y,radius){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.polygon = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.polygon);

    }
  
    display() {
      var angle = this.polygon.angle;
      push();
      translate(this.polygon.position.x, this.polygon.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(polygon_img,polygon.position.x,polygon.position.y,40,40);
      pop();
    }
};

