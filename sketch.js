let albumCoverImg; // Full album cover image
let centerImages = []; // Array to hold the center images
let imgWidth, imgHeight;
let fadeSpeed = 1; // Speed of the fading effect
let currentImageIndex = 0; // Index to track the current image
let nextImageIndex = 1; // Index for the next image
let alphaValue = 255; // Alpha value for crossfade effect

function preload() {
  albumCoverImg = loadImage("AlbumCover.png"); // Load the full album cover

  // Load the images into the centerImages array
  centerImages.push(loadImage("Image1.png")); // Image 1 (PNG)
  centerImages.push(loadImage("Image2.png")); // Image 2 (PNG)
  centerImages.push(loadImage("Image3.png")); // Image 3 (PNG)
  centerImages.push(loadImage("Image4.png")); // Image 4 (PNG)
  centerImages.push(loadImage("Image5.png")); // Image 5 (PNG)
  centerImages.push(loadImage("Image6.png")); // Image 6 (PNG)
  centerImages.push(loadImage("Image7.png")); // Image 7 (PNG)
  centerImages.push(loadImage("Image8.png")); // Image 8 (PNG)
  centerImages.push(loadImage("Image9.png")); // Image 9 (PNG)
  centerImages.push(loadImage("Image10.png")); // Image 10 (PNG)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imgWidth = width * 0.7; // Scale image to 70% of canvas width
  imgHeight = albumCoverImg.height * (imgWidth / albumCoverImg.width); // Maintain aspect ratio
  imageMode(CENTER);
}

function draw() {
  background(255); // White background

  // Draw the full album cover (unaltered)
  image(albumCoverImg, width / 2, height / 2, imgWidth, imgHeight);

  // Calculate the dimensions and position for the center images
  let centerImgWidth = imgWidth / 2.5; // Adjust the size of the center part
  let centerImgHeight = centerImgWidth; // Make it square for the center effect
  let centerX = width / 2;
  let centerY = height / 2;

  // Crossfade between center images
  push();
  tint(255, alphaValue); // Apply transparency to the current image
  image(centerImages[currentImageIndex], centerX, centerY, centerImgWidth, centerImgHeight);
  pop();

  push();
  tint(255, 255 - alphaValue); // Apply transparency to the next image
  image(centerImages[nextImageIndex], centerX, centerY, centerImgWidth, centerImgHeight);
  pop();

  // Gradually decrease the alpha for the crossfade effect
  alphaValue -= fadeSpeed;
  if (alphaValue <= 0) {
    alphaValue = 255; // Reset alpha value
    currentImageIndex = nextImageIndex; // Move to the next image
    nextImageIndex = (nextImageIndex + 1) % centerImages.length; // Loop to the next image
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  imgWidth = width * 0.7;
  imgHeight = albumCoverImg.height * (imgWidth / albumCoverImg.width);
}
