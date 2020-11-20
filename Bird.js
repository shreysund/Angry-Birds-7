class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokyImage=loadImage ("sprites/smoke.png")
    this.trajectory=[]
    Matter.Body.setDensity(this.body,2.0)
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var position=[this.body.position.x,this.body.position.y] 
    if(this.body.velocity.x>10&this.body.position.x>200){
      this.trajectory.push(position)
    }
    for(var r=0;r<this.trajectory.length;r++){
      image(this.smokyImage,this.trajectory[r][0],this.trajectory[r][1])
    }
    super.display();
  }
}
