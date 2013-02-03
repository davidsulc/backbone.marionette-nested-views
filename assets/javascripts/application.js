MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

HeroView = Backbone.Marionette.ItemView.extend({
  template: "#accordion-group-template"
});

AccordionView = Backbone.Marionette.CollectionView.extend({
  itemView: HeroView
});
