class Balls { 
    constructor() {
        var options = {
             isStatic: false,
             restitution: 0.3,
             friction:0.5,
             density:1.2
           }
       this.body = Bodies.circle(100, 300, 5.5, options);
      
       World.add(world, this.body)
     }

     display(){
        var pos =this.body.position;
        pos.x = 110
        pos.y = 262
      push();
       translate(pos.x, pos.y);
       fill("red");
       stroke("white")
       strokeWeight(4);
       ellipse(0,0,44);
       pop();
     }




 }
