class  Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            length : 300,
            stiffness : 0.1
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
            }

            attach(body){
                this.rope.bodyA=body;
            }

            fly(){
                this.rope.bodyA=null;
            }

            display(){
                var pointA=this.rope.bodyA.position;
                var pointB=this.pointB;
                if(this.rope.bodyA){
                   push();
                   strokeWeight(5);
                   stroke("orange");
                   line(pointA.x,pointA.y,pointB.x,pointB.y);
                   pop();
                }
        
            }
}