class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	 var options={
		 restitution:0.3,
		 friction:5,
		 density:1
	 }
		
		this.body=Bodies.circle(x,y,r, options);
		this.x=x;
		this.y=y;
		this.r=2*r;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
		
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r)
			pop()
	}

}