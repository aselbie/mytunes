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

      // this is a problem. If we dequeue from the top, np. when we dequeue from
      // the bottom then length > 0 and we trigger play first

      if ( this.length > 0){
        this.playFirst();
      }

      if (this.length === 0) {
        song.stop();
      }

    })

  },

  playFirst: function(){
    this.at(0).play();
  }

});
