let albumCoverImg; 
let centerImages = []; 
let imgWidth, imgHeight;
let fadeSpeed = 1; // Speed of fade
let currentImageIndex = 0; // Index to track the current image
let nextImageIndex = 1; 
let alphaValue = 255; // Alpha value for crossfade effect

function preload() {
  albumCoverImg = loadImage("AlbumCover.png"); 

  // Load the images into the centerImages array
  centerImages.push(loadImage("Image1.png")); 
  centerImages.push(loadImage("Image2.png")); 
  centerImages.push(loadImage("Image3.png")); 
  centerImages.push(loadImage("Image4.png")); 
  centerImages.push(loadImage("Image5.png")); 
  centerImages.push(loadImage("Image6.png")); 
  centerImages.push(loadImage("Image7.png")); 
  centerImages.push(loadImage("Image8.png")); 
  centerImages.push(loadImage("Image9.png"));
  centerImages.push(loadImage("Image10.png")); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imgWidth = width * 0.7;
  imgHeight = albumCoverImg.height * (imgWidth / albumCoverImg.width); 
  imageMode(CENTER);
}

function draw() {
  background(255); // White background

  // Draw the full album cover 
  image(albumCoverImg, width / 2, height / 2, imgWidth, imgHeight);

  
  let centerImgWidth = imgWidth / 2.5; 
  let centerImgHeight = centerImgWidth; 
  let centerX = width / 2;
  let centerY = height / 2;

  // Crossfade between center images
  push();
  tint(255, alphaValue); 
  image(centerImages[currentImageIndex], centerX, centerY, centerImgWidth, centerImgHeight);
  pop();

  push();
  tint(255, 255 - alphaValue); 
  image(centerImages[nextImageIndex], centerX, centerY, centerImgWidth, centerImgHeight);
  pop();

  // Gradually decrease the alpha for the crossfade effect
  alphaValue -= fadeSpeed;
  if (alphaValue <= 0) {
    alphaValue = 255; 
    currentImageIndex = nextImageIndex; 
    nextImageIndex = (nextImageIndex + 1) % centerImages.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  imgWidth = width * 0.7;
  imgHeight = albumCoverImg.height * (imgWidth / albumCoverImg.width);
}
