'use strict';
(function($) {
	var pageContent;

	pageContent = [{
		'img': './img/1.jpg',
		'title': 'Finansavisen August 2013',
		'pages': [{
			'img': './img/1.jpg'
		},{
			'img': './img/2_Elle.jpg'
		},{
			'img': './img/3_Elle.jpg'
		},{
			'img': './img/4_Elle.jpg'
		},{
			'img': './img/5_Elle.jpg'
		},{
			'img': './img/6_Elle.jpg'
		},{
			'img': './img/7_Elle.jpg'
		},{
			'img': './img/8_Elle.jpg'
		},{
			'img': './img/9_Elle.jpg'
		},{
			'img': './img/10_Elle.jpg'
		},{
			'img': './img/11_Elle.jpg'
		},{
			'img': './img/12_Elle.jpg'
		}]
	},{
		'img': './img/2.jpg',
		'title': 'Vogue Deutschland September 2013',
		'pages': [{
			'img': './img/1_VogueEspana_Feb12_Cover_0.jpg'
		},{
			'img': './img/2_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/3_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/4_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/5_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/6_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/7_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/8_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/9_VogueEspana_Feb12_0.jpg'
		},{
			'img': './img/10_VogueEspana_Feb12_0.jpg'
		}]
	},{
		'img': './img/8.jpg',
		'title': 'Vogue Paris July 2013',
		'pages': [{
			'img': './img/Cover_8.jpg'
		},{
			'img': './img/1_2.jpg'
		},{
			'img': './img/2_3.jpg'
		},{
			'img': './img/3_2.jpg'
		},{
			'img': './img/4_2.jpg'
		}]
	},{
		'img': './img/4.jpg',
		'title': 'Elle Italy July 2013',
		'pages': [{
			'img': './img/VanityFair_14.3.12_p.253_cover_0.jpg'
		},{
			'img': './img/VanityFair_14.3.12_p.253_ed_0.jpg'
		}]
	},{
		'img': './img/5.jpg',
		'title': 'Cover Man May 2012',
		'pages': [{
			'img': './img/Vogue_Paris_1.jpg'
		},{
			'img': './img/Vogue_Paris_2.jpg'
		},{
			'img': './img/Vogue_Paris_3.jpg'
		},{
			'img': './img/Vogue_Paris_4.jpg'
		},{
			'img': './img/Vogue_Paris_5.jpg'
		},{
			'img': './img/Vogue_Paris_6.jpg'
		}]
	},{
		'img': './img/6.jpg',
		'title': 'Vanity Fair Italy March 2012',
		'pages': [{
			'img': './img/Vs_1Cover.jpg'
		},{
			'img': './img/Vs_2.jpg'
		},{
			'img': './img/Vs_3.jpg'
		},{
			'img': './img/Vs_4.jpg'
		}]
	},{
		'img': './img/7.jpg',
		'title': 'Vanity Fair Italy March 2012',
		'pages': [{
			'img': './img/Cover_4.jpg'
		},{
			'img': './img/Tatler 04.12_0.jpg'
		}]
	},{
		'img': './img/8.jpg',
		'title': 'Vanity Fair Italy March 2012',
		'pages': [{
			'img': './img/Cover_8.jpg'
		},{
			'img': './img/1_2.jpg'
		},{
			'img': './img/2_3.jpg'
		},{
			'img': './img/3_2.jpg'
		},{
			'img': './img/4_2.jpg'
		}]
	},{
		'img': './img/4.jpg',
		'title': 'Elle Italy July 2013',
		'pages': [{
			'img': './img/VanityFair_14.3.12_p.253_cover_0.jpg'
		},{
			'img': './img/VanityFair_14.3.12_p.253_ed_0.jpg'
		}]
	}, {
		'img': './img/1.jpg',
		'title': 'Finansavisen August 2013',
		'pages': [{
			'img': './img/1.jpg'
		},{
			'img': './img/2_Elle.jpg'
		},{
			'img': './img/3_Elle.jpg'
		},{
			'img': './img/4_Elle.jpg'
		},{
			'img': './img/5_Elle.jpg'
		},{
			'img': './img/6_Elle.jpg'
		},{
			'img': './img/7_Elle.jpg'
		},{
			'img': './img/8_Elle.jpg'
		},{
			'img': './img/9_Elle.jpg'
		},{
			'img': './img/10_Elle.jpg'
		},{
			'img': './img/11_Elle.jpg'
		},{
			'img': './img/12_Elle.jpg'
		}]
	}];

	var BookModel = Backbone.Model.extend({

		defaults: {
			img: './img/default.jpg',
			title: 'Italy March 2012',
		}
	});

	var bookModel = new BookModel();

	var BookCollection = Backbone.Collection.extend({
		model: BookModel
	});

	var bookCollection = new BookCollection(pageContent);

	var PagesView = Backbone.View.extend({

		tagName: 'div',
		className: 'pages-block',
		template: $('#pages').html(),

		initialize: function() {
			this.render();
			console.log(this.model.get('pages').length);
			this.$el.css({'width': this.model.get('pages').length * 350 + 'px'});
		},

		render: function() {
			var tmpl = _.template(this.template);
			$(this.el).html(tmpl( this.model.toJSON() ) );
			return this;
		}
	});

	var BookView = Backbone.View.extend({
		tagName: 'section',
		className: 'list-element',
		template: $('#books').html(),

		events: {
			'click .img-container, .rollover': 'navigate'
		},

		initialize: function() {

		},

		render: function() {
			var tmpl = _.template(this.template);
			$(this.el).html(tmpl( this.model.toJSON() ) );
			return this;
		},

		navigate: function() {
			var title = this.model.get('title').split(' ').join('-');
			controller.navigate("book/" + title);
			bookModel.trigger('change', this.model);
		}

	});


	var BooksBlockView = Backbone.View.extend({

		tagName: 'div',
		className: 'books-block',

		events: {

		},

		initialize: function() {
			this.elementWidth = 256;
			this.collectionViews = [];
			this.pageLength = bookCollection.models.length;
			this.render();
		},

		render: function() {
			var self = this;
			_.each(bookCollection.models, function(item, index) {
				item.set('id', index);
				self.renderBooks(item);
			}, this);
			return this;
		},

		renderBooks: function(item) {
			var pageView = new BookView({
				model: item
			});
			this.collectionViews.push(pageView);
			this.$el.append(pageView.render().el);
			this.$el.css({'width': this.elementWidth * this.pageLength + 'px'});
		},

		removeViews: function() {
			_.each(this.collectionViews, function(item) {
				item.remove();
			});
		}

	});

	var AppView = Backbone.View.extend({

		el: $('.wrapper'),

		events: {},

		initialize: function() {
			bookModel.bind('change', this.renderPages, this);
		},

		renderPages: function(model) {
			this.pages = new PagesView({model: model});
			this.$el.append(this.pages.el);
			this.removeBookView();
		},

		renderBooks: function() {
			this.bookView = new BooksBlockView();
			this.$el.append(this.bookView.el);
		},

		removePageView: function() {
			if (this.pages) {
				this.pages.remove();
			}
		},

		removeBookView: function() {
			if (this.bookView) {
				this.bookView.removeViews();
				this.bookView.remove();
			}
		}
	});

	var Controller = Backbone.Router.extend({

		routes: {
			'':'goToBooks',
			'book/': 'goToBooks',
			'book/:query': 'goToPages'

		},

		initialize: function() {
			this.appView = new AppView();
		},

		goToBooks: function() {
			this.navigate('book/');
			this.appView.renderBooks();
			this.appView.removePageView();
		},

		goToPages: function(query) {
			var currentBook =  query.split('-').join(' ');
			var currentModel = _.filter(bookCollection.models, function(item) {
				return item.get('title').toLowerCase() === currentBook.toLowerCase();
			});
			console.log(currentModel);
			this.appView.renderPages(currentModel[0]);
			this.appView.removeBookView();
		}

	});

	var controller = new Controller();

	Backbone.history.start();




})(jQuery);