
  Discourse.ExternalNavItem = Discourse.NavItem.extend({
    href : function() {
      return this.get('href');
    }.property('href')
  });

  I18n.translations.en.js.filters.unanswered = { title: "Unanswered", help: "topics which might need a little love" };

  Discourse.NavItem.reopenClass({
    buildList : function(category, args) {
      var list = this._super(category, args);
      if(!category) {
        list.push(Discourse.ExternalNavItem.create({href: '/latest?max_posts=1', name: 'unanswered'}));
      }
      return list;
    }
  });

