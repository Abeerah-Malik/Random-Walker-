// Variable for background color
var bg;

//variables for positions of x and y
var xpos;
var ypos;

//variables for velocity of x and y
var xvel;
var yvel;

//variables for direction for x and y
var xdirect = 1;
var ydirect = 1;

// array of sounds
var soundorder = [];


// variables for sounds
var soundOne;
var soundTwo;
var soundThree;
var soundFour;

//vraiable for image
var upHouse;
var balloonOne;
var balloonTwo;
var balloonThree;

function preload() {
  // load all sounds
  soundOne = loadSound('tune.01.mp3');
  soundTwo = loadSound('tune.02.mp3');
  soundThree = loadSound('tune.03.mp3');
  soundFour = loadSound('tune.04.mp3');
  
	//load images
	upHouse = loadImage('house.png');
	balloonOne = loadImage('balloon.01.png');
	balloonTwo = loadImage('balloon.02.png');
	balloonThree = loadImage('balloon.03.png');
	
  // add sounds to the array in the same order as the colors
  soundorder = [soundOne, soundTwo, soundThree, soundFour];
}


function setup() {
  // create canvas
  createCanvas(600, 600);

	//define bg color
	bg = '#bde0fe';
	

	//disable stroke
  noStroke();


	//set range of numbers for velocity 
  xvel = random(1, 4);
  yvel = random(1, 4);
  
	
	//set initial x and y position
  xpos = width / 2;
  ypos = height / 2;
	
	
	frameRate(30);

	
	//create slider for volume
	slider = createSlider(0, 1, 0.5, 0.01);
	slider.position(10, 650);
	
}

function draw() {

	background(bg);
	balloons();
	
	//updates the volume of all songs based on slider created
	var volume = slider.value();
	soundOne.setVolume(volume);
	soundTwo.setVolume(volume);
	soundThree.setVolume(volume);
	soundFour.setVolume(volume);

  

  if (xpos < 0) {               //hits left
    xdirect = xdirect * -1;     //reverse direction when hit   
    xvel = random(1, 4);         //adjust value for velocity
    xpos = 0;                   //reset to x to prevent going out of canvas
    playrandomsound();
		
  } else if (xpos + upHouse.width > width) {   //hits right
    xdirect = xdirect * -1;
    xvel = random(1, 4);
    xpos = width - upHouse.width;
	  playrandomsound();
		
  } else if (ypos < 0) {       //hits top
    ydirect = ydirect * -1;
    yvel = random(1, 4);
    ypos = 0;
		playrandomsound();
			
  } else if (ypos + upHouse.height > height) {   //hits bottom
    ydirect = ydirect * -1;
    yvel = random(1, 4);
    ypos = height - upHouse.height;
		playrandomsound();
		
  }
  
  
	//update position
  xpos = xpos + (xvel * xdirect);
  ypos = ypos + (yvel * ydirect);
  

  push();
  translate(xpos, ypos)
  image(upHouse, 0, 0,);
	//rect(0,0,15)
  pop();
	

}



function balloons() {	
image(balloonOne, 100,50);
image(balloonTwo, 200,300);
image(balloonThree, 400,200);
	
}

function playrandomsound() {
  // stop any currently playing sound
  for (var sound of soundorder) {
    sound.stop();
  }
  //choose a random sound from the array and play it
  var randomSound = random(soundorder);
  randomSound.play();
}

function keyPressed() {
	//save canvas
	if( key == 's' || key == 'S'){
		saveCanvas('Ábeerah_Malik_Week10_Assignment.jpg');
		
	}
	
}









