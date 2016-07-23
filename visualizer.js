var paused = false;

function preload() {
  sound = loadSound('song.mp3');
}

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
  sound.play();
  fft = new p5.FFT(0.7, 1024);
}

function mouseClicked() {
  if (paused) {
    sound.play()
    paused = false;
  } else {
    sound.pause();
    paused = true;
  }
}

function draw() {
  background(20, 20, 20);
  // Returns an array of amplitude values (between 0 and 255) across the frequency spectrum.
  //Length is equal to FFT bins (1024 by default). The array indices correspond to frequencies
  spectrum = fft.analyze();

  // Returns a range between 0 (no energy/volume at that frequency) and 255 (maximum energy)
  // Accepts Number(s) corresponding to frequency (in Hz), or a String corresponding to
  // predefined frequency ranges ("bass", "lowMid", "mid", "highMid", "treble").
  lowEnergy = fft.getEnergy("bass", "lowMid");
  midEnergy = fft.getEnergy("mid", "highMid");
  highEnergy = fft.getEnergy("treble")

  // Volume is between 0 and 1
  vol = sound.getLevel();
  makeEnergyRects(midEnergy, highEnergy);
  makeSpectrumWaveform(spectrum, midEnergy);
  makeBeatVisual(lowEnergy, vol);
}

function makeBeatVisual(energy, vol) {
  var innerEllipse = energy * .3 * (vol + 1);
  var outerEllipse = energy * .7;
  stroke(255);

  beginShape();
  fill(energy+10, energy+10, energy+10);
  ellipse(width/2, height/2, outerEllipse, outerEllipse);
  endShape();

  beginShape();
  fill(121 * energy,energy*.5,energy*.5);
  ellipse(width/2, height/2, innerEllipse, innerEllipse);
  endShape();
}

function makeSpectrumWaveform(spectrum, energy) {
  var spectrumCopy = spectrum.slice();
  noStroke();
  fill(energy * .5, energy*2, energy * .7);
  beginShape();

  // Right side
  for (var i = 20; i < spectrumCopy.length; i++){
    x = map(i, 20, spectrumCopy.length, width/2, width);
    y = map(spectrumCopy[i], 0, 255, height/2, 10);
    ellipse(x,y, 2, 2);
  }
  endShape();

  // Left side
  beginShape();
  for (var i = 20; i < spectrumCopy.length; i++){
    x = map(i, 20, spectrumCopy.length, width/2, 0);
    y = map(spectrumCopy[i], 0, 255, height/2, 10);
    scale(-1, 1);
    ellipse(x,y, 2, 2);
  }

  endShape();
}

function makeEnergyRects(midEnergy, highEnergy) {
  var rectWidth = 10;
  var halfWidth = width/6;
  beginShape();

  for (var i = 0; i < halfWidth*3; i+=rectWidth) {
    var blue = ((highEnergy*3 + midEnergy/3) + i)/4;
    fill(50, 50, blue);
    rect(i, height/2, rectWidth, i/2);
  }
  endShape();

  beginShape();
  for (var i = 0; i < halfWidth*3; i+=rectWidth) {
    var blue = ((highEnergy*3 + midEnergy/3) + i)/4;
    fill(50, 50, blue);
    rect(width-i, height/2, rectWidth, i/2);
  }
  endShape();
}
