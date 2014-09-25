// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': function() {
      this.model.ended();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();

    this.listenTo(this.model, 'stop', function(){
      this.stop();
    }, this);
  },

  stop: function(){
    this.el.pause();
    this.el.currentTime = 0;
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
