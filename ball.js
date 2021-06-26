class Ball{
constructor(x,y,r){
    var options={
 restitution:1,  
 density:3,
friction:1.0  

    }
this.x=x;
this.y=y;
this.r=r/2;  
this.body=Bodies.circle(x,y,r/2,options);
this.image=loadImage("snowBall.png");
World.add(world,this.body);

}
display(){
var angle=this.body.angle;
var pos=this.body.position;
push();
translate (pos.x,pos.y);
rotate (angle);
ellipseMode (radius);
imageMode (CENTER);
image(this.image,0,0,this.r,this.r);
pop ();

}



}