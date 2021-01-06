class paper {

constructor(x,y,r){

var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2


}
this.x=x;
this.r=r;
this.y=y;

this.body=Bodies.circle(this.x,this.y,this.r/2,options);
World.add(World,this.body);
}
display()
{
var paperpos = this.body.position;

Push();
Translate(paperpos.x,paperpos.y);







}
}

























































}