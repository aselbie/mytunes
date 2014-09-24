// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){

      if (this.length === 1) {
        this.playFirst()
      }

    })

    this.on('ended', function(song){
      this.remove(this.at(0));
      if ( this.length > 0){
        this.playFirst();
      }
    })

    this.on('dequeue', function(song){
      this.remove(song);
    })

  },

  playFirst: function(){
    this.at(0).play();
  }

});
