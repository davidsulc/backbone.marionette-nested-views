MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

Hero = Backbone.Model.extend({});

Heroes = Backbone.Collection.extend({
  model: Hero
});

HeroView = Backbone.Marionette.ItemView.extend({
  template: "#accordion-group-template"
});

AccordionView = Backbone.Marionette.CollectionView.extend({
  itemView: HeroView
});
