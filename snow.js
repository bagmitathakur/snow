class Snow{
constructor(x,y,r){
  var options={
   isStatic:false
  }  
  
  this.x=x;
  this.y=y;
  this.r=r;
  this.body=Bodies.circle(x,y,r,options);
  this.image=loadImage("snow5.webp");
  World.add(world,this.body);

 
}
dispaly(){
  var angle = this.body.angle;
  var position=this.body.position;
  push();
  translate(position.x, position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.r, this.r);
  pop();

}


}