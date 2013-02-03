MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

Hero = Backbone.Model.extend({});

Heroes = Backbone.Collection.extend({
  model: Hero
});

HeroView = Backbone.Marionette.CompositeView.extend({
  template: "#accordion-group-template",
  
  className: "accordion-group",
  
  events: {
    'click a': 'logInfoUrl'
  },
  
  logInfoUrl: function(){
    console.log(this.model.get('info_url'));
  }
});

AccordionView = Backbone.Marionette.CollectionView.extend({
  className: "accordion",
  
  itemView: HeroView
});
