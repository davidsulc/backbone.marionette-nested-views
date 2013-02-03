MyApp = new Backbone.Marionette.Application();

MyApp.addRegions({
  mainRegion: "#content"
});

Villain = Backbone.Model.extend({});

Villains = Backbone.Collection.extend({
  model: Villain
});

Hero = Backbone.Model.extend({});

Heroes = Backbone.Collection.extend({
  model: Hero
});

VillainView = Backbone.Marionette.ItemView.extend({
  template: "#villain-template",
  
  events: {
    'click li': 'logInfoUrl'
  },
  
  logInfoUrl: function(){
    console.log(this.model.get('info_url'));
  }
});

HeroView = Backbone.Marionette.CompositeView.extend({
  template: "#accordion-group-template",
  
  className: "accordion-group",
  
  itemView: VillainView,
  
  itemViewContainer: "ul",
  
  events: {
    'click a': 'logInfoUrl'
  },
  
  initialize: function(){
    this.collection = this.model.get('villains');
  },
  
  logInfoUrl: function(){
    console.log(this.model.get('info_url'));
  }
});

AccordionView = Backbone.Marionette.CollectionView.extend({
  id: "heroList",
  
  className: "accordion",
  
  itemView: HeroView
});
