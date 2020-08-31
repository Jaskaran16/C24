class Trash{
    constructor (x,y){
    var options ={
    isStatic:false
    }
    this.body = Bodies.rectangle(x,y,40,40,options)
    this.width = 40;
    this.height = 40;
    
    World.add(world,this.body)
    }
    display(){
    rectMode(CENTER)
    fill("green")
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
    }