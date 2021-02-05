class sling {
    constructor(bodyA,bodyB) {
        var options = {
             bodyA : bodyA,
             bodyB : bodyB,
             stiffness : 0.04,
             length : 10
            
        }
    
    this.shooter = Matter.Constraint.create(options);
    World.add(world, this.shooter);
    }
    // display() {
    //    var pointA = this.shooter.bodyA.position;
    //    var pointB = this.shooter.bodyB.position;
    //    strokeWeight(4)
    //    line(pointA.x, pointA.y, pointB.x,pointB.y)
    // }
}