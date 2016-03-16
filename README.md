# PianoGame

![alt tag] (http://res.cloudinary.com/ddefvho7g/image/upload/v1458106937/Screen_Shot_2016-03-15_at_10.37.32_PM_kbhvls.png)

##Summary

PianoType is an educational game that teaches one how to type as well as play
the piano simultaneously. The back end utilizes Ruby on Rails while the front end
uses Flux/React architecture. The app allows users to:

- use their keyboard as a piano to make music
- record their songs by pressing 'Start Recording'
- play back the song they recorded by pressing 'Play Recording'
- play a predesigned song by pressing 'Play A Whole New World!'
- see what note they are pressing because the notes highlight
- record their own original songs by pressing 'Practice On Your Own'

##Overall Structure

###Back end
The Back end was built using Ruby on Rails. There weren't any database requests.

###Front end
The front end utilized React.js and Javascript. The piano, notes, and recorder
are re-rendered without sending requests to the server constantly. This is done
through React's virtual DOM which update elements that have changed state. CSS
animations and transforms are used to make the notes slide down the screen by
translating each note and setting the duration of the whole song.

###Libraries

- React.js
- Flux

##Primary Components

###Piano
Used window.AudioContext to support sound inputs and produces a sound using the
Web Audio API. It creates a sound sources and connects them to the AudioContext
sound destinations.

  var ctx = new (window.AudioContext || window.webkitAudioContext)();

  gainNode.connect(ctx.destination);


###Recorder
The recorder is made using the React/Flux architecture. In the recorder
component, a Listener adds all the notes a user presses to the Track Util.
When 'Play Recording' is pressed, we throttle through an iteration of all the
notes that's been added to the track by using setInterval. Inside the setInterval,
the keyStore is called every 1ms to update the keys in the store. 

![alt tag] (http://res.cloudinary.com/ddefvho7g/image/upload/v1458108881/Screen_Shot_2016-03-15_at_11.14.16_PM_tpkqhf.png)

###Sliding notes
Used mixins so that the app will be supported in different browsers. The code I
used to make the notes slide from top to bottom:

  .music-note {
    text-align: center;
    @include animation("falling-keys linear");
    @include animation-duration(160s);
    margin-top: 3px;
  }

  @include keyframes(falling-keys) {
    0% {
      @include transform(translateY(-14700px))
    }
    100% {
      @include transform(translateY(15000px))
    }
  }

![alt tag] (http://res.cloudinary.com/ddefvho7g/image/upload/v1458106945/Screen_Shot_2016-03-15_at_10.39.01_PM_febdr7.png)
