# CS4300 Music Visualizer
For my Computer Graphics project, I decided to write a simple music visualizer
in p5JS, using their sound library. The main file is visualizer.js. You need P5JS and the sound library.

To use, clone the repo and add an MP3 of your choice to the directory.
Then go into visualizer.js and change "loadSound('lungs.mp3')" on line 4 to the path of your mp3.

You'll also need to run a local server to serve the mp3 -- I just used the command
python -m SimpleHTTPServer 8000
