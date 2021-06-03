canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

c1_height=70;
c1_width=120;

c1_xpos = 10;
c1_ypos = 10;

c1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";

c2_height=70;
c2_width=120;

c2_xpos = 10;
c2_ypos = 100;

c2_image = "https://i.postimg.cc/wM0VrHk6/car2.png";
bg_image="bg.jpg";

function add()
{
	bg = new Image();
	bg.onload = uploadBackground;
	bg.src= bg_image;

	c1 = new Image();
	c1.onload = uploadcar1;
	c1.src= c1_image;

	c2 = new Image();
	c2.onload = uploadcar2;
	c2.src= c2_image;
}

function uploadBackground()
{
	ctx.drawImage(bg, 0 , 0, canvas.width , canvas.height);
}
function uploadcar1()
{
	ctx.drawImage(c1, c1_xpos , c1_ypos, c1_width , c1_height);
}

function uploadcar2()
{
	ctx.drawImage(c2, c2_xpos , c2_ypos, c2_width , c2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;

	if(keyPressed== '37')
	{
		console.log("left");
		c1_left();
	}
	
	 if(keyPressed=='38')
	{
		c1_up();
	}

	 if(keyPressed=='39')
	{
		c1_right();
	}
	 if(keyPressed=='40')
	{
		c1_down();
	}


     if(keyPressed== '65')
	{
		console.log("left");
		c2_left();
	}
	
	 if(keyPressed=='87')
	{
		c2_up();
	}

	 if(keyPressed=='68')
	{
		c2_right();
	}
	 if(keyPressed=='83')
	{
		c2_down();
	}
}

function c1_up()
{
	if(c1_ypos>=0)
	{
      c1_ypos=c1_ypos-10;
      uploadBackground();
	  uploadcar1();
	}
}

function c1_left()
{
	if(c1_xpos>=0)
	{
      c1_xpos=c1_xpos-10;
      uploadBackground();
	  uploadcar1();
	}
}

function c1_right()
{
	if(c1_xpos<=700)
	{
      c1_xpos=c1_xpos+10;
      uploadBackground();
	  uploadcar1();
	}
}

function c1_down()
{
	if(c1_ypos<=500)
	{
      c1_ypos=c1_ypos+10;
      uploadBackground();
	  uploadcar1();
	}
}






function c2_up()
{
	if(c2_ypos>=0)
	{
      c2_ypos=c2_ypos-10;
      uploadBackground();
	  uploadcar2();
	}
}

function c2_left()
{
	if(c2_xpos>=0)
	{
      c2_xpos=c2_xpos-10;
      uploadBackground();
	  uploadcar2();
	}
}

function c2_right()
{
	if(c2_xpos<=700)
	{
      c2_xpos=c2_xpos+10;
      uploadBackground();
	  uploadcar2();
	}
}

function c2_down()
{
	if(c2_ypos<=500)
	{
      c2_ypos=c2_ypos+10;
      uploadBackground();
	  uploadcar2();
	}

	if(c1_xpos>700)
{
	document.getElementById("game status").innerHTML="Car 1 won";
}
else
{
	document.getElementById("game status").innerHTML="Car 2 won";
}
}
