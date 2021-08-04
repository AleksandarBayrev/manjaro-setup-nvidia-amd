(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(16, {"Hamburger_links":"Manjaro Homepage,https://manjaro.org,f"});
  }
})();
(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "Hamburger links component";
    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(16);
    var themePrefix = function themePrefix(key) {
      return 'theme_translations.16.' + key;
    };

    Discourse._registerPluginCode('0.8.18', function (api) {
      try {

        var hmcl = settings.Hamburger_links,
            sec = $.map(hmcl.split("|"), $.trim);
        $.each(sec, function (value) {
          var sec = $.map(this.split(","), $.trim);
          if (sec[2] === "g") {
            loc = "generalLinks";
          }
          if (sec[2] === "f") {
            loc = "footerLinks";
          }
          var classname = sec[0].replace(/\s+/g, "-").toLowerCase();
          api.decorateWidget("hamburger-menu:" + loc, function () {
            return {
              href: sec[1],
              rawLabel: sec[0],
              className: "custom-hamburger-link " + classname
            };
          });
        });
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;
        rescue(__theme_name__, err, api);
      }
    });
  }
})();