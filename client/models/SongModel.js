// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    played: 0
  },

  play: function(){
    this.trigger('play', this);
    this.set('played', this.get('played') + 1);
  },

  stop: function(){
    this.trigger('stop', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }

});
