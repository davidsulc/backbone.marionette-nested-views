MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

Hero = Backbone.Model.extend({});

Heroes = Backbone.Collection.extend({
  model: Hero
});

HeroView = Backbone.Marionette.ItemView.extend({
  template: "#accordion-group-template",
  
  className: "accordion-group"
});

AccordionView = Backbone.Marionette.CollectionView.extend({
  className: "accordion",
  
  itemView: HeroView
});
