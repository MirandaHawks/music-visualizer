# CS4300 Music Visualizer
For my Computer Graphics project, I decided to write a simple music visualizer
in p5JS, using their sound library. The main file is visualizer.js. You need P5JS and the sound library.

To use, clone the repo and add an MP3 of your choice to the directory.
Then go into visualizer.js and change "loadSound('song.mp3')" on line 4 to the path of your mp3.

You'll also need to run a local server to serve the mp3 -- I just used the command
python -m SimpleHTTPServer 8000

# Why a Music Visualizer?
My main purpose in building this was to learn more about ProcessingJS as well as how the Fast Fourier Transform works.
I had been introduced to the Fast Fourier Transform in a class previously, but never felt that I got a firm understanding of it.
However, using it in this project allowed me to literally visualize it which made it much easier to understand. I found that having a music visualizer
also made it much easier for the class to understand when this project was presented.

# What is the Fast Fourier Transform?
Well, it's a faster version of the Fourier Transform! But for a real answer, a Fourier Transform is just a different way of looking at audio.
Think about an MP3 looks when you play it on a computer -- you can see where the sound gets louder and quieter based on how large the waveforms are right?
Usually, we see music in the time domain, so we see how the audio changes over time. The Fourier Transform shows audio in the frequency domain instead -- that is, we instead see what frequencies are present in the song and their amplitudes (basically, how loud or soft they are).
So if there's a lot of heavy bass in the song, there will be a lot of lower frequencies shown in the graph. If a song has a lot of high-pitched guitar solos, graphing the song would show a lot more higher frequencies.

# How does this visualizer show that?
Luckily, using the P5JS library, we're given a sound library that does the hard work for us, so we can better understand how the visualizer shows a fourier transform.
Simply put, how the visualizer works is as the song plays, it is constantly running it through a fourier transform and plotting the output. So it basically takes the song in very very tiny chunks, analyzes it with the fourier transform, and then graphs the results.
Now, I had to do the programming to graph it, but what we end up with when we graph it using dots in a line as our "base" shape is a dancing line. Each section of the line represents different frequencies that will move up and down based on their amplitude at the time.
So for example, bass (low) frequencies may be on the right side and treble (high) frequencies may be on the left. So a kick drum in a song will cause the right end of the line to push up, while a hi hat would make the end closer to the left push up.

# What's all the extra stuff?
Since this was for computer graphics, I added some other fancy things. I actually ended up using two mirrored lines to represent the fourier transform, so the bass frequencies are in the middle and the frequencies get higher as you move further out from the middle.
The bars underneath that get brighter or dimmer are based on the mid to high frequencies -- so as those increase in volume, the bars will get brighter. The circle in the middle is kind of a speaker thing, that "pumps" out more as the bass gets louder (so mostly on kick drums). 
But all of the frequencies are visible in the green moving dots in the middle (I did remove some of the lowest frequencies because those seemed to be always present in a recording and I wanted it to better represent what a human actually hears).

# Can this be used for things other than visualizers?
Actually, in my (somewhat limited) time working with digital audio workstations such as Ableton and ProTools, there are plugins that show the Fourier Transform of a song. It is extremely useful to have frequency information about a song so you can pull out any frequencies
you may not want in a song, or boost ones you want to enhance! For example, maybe you have a cymbal on your drums that are causing a very unpleasant, high pitched ringing in your song -- using the frequency information of the song, you can find those annoying sounds and pull them out.

I built this pretty much by creating the overall concept and then playing around with numbers and tweaking things until I liked it. So feel free to clone it, put your own songs in, and play around with it or even create completely new visuals.

Thanks for reading!
