class Slingshot{
    constructor(body,anchor){
        var options = {
          bodyA:body,
          pointB:anchor,
          stiffness:0.004,
          length:3  
        }
        this.bodyA=body;
        this.pointB=anchor;
        this.string=Constraint.create(options);
        World.add(world,this.string);
    }
    fly(){
       this.string.bodyA=null;
    }

    attach(body){
        this.string.bodyA=body;
    }
    display(){
          if(this.string.bodyA){
            var pointA=this.bodyA.position;
            var pointB= this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            strokeWeight(2);
        }
    }
    };