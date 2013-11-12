kendo_module({
    id: "mobile.shim",
    name: "Shim",
    category: "mobile",
    description: "Mobile Shim",
    depends: [ "popup" ],
    hidden: true
});

(function($, undefined) {
    var kendo = window.kendo,
        ui = kendo.mobile.ui,
        Popup = kendo.ui.Popup,
        SHIM = '<div class="km-shim"/>',
        Widget = ui.Widget;

    var Shim = Widget.extend({
        init: function(element, options) {
            var that = this,
                app = kendo.mobile.application,
                os = kendo.support.mobileOS,
                osname = app ? app.os.name : (os ? os.name : "ios"),
                ioswp = osname === "ios" || osname === "wp" || (app ? app.os.skin : false),
                bb = osname === "blackberry",
                align = options.align || (ioswp ?  "bottom center" : bb ? "center right" : "center center"),
                position = options.position || (ioswp ? "bottom center" : bb ? "center right" : "center center"),
                effect = options.effect || (ioswp ? "slideIn:up" : bb ? "slideIn:left" : "fade:in"),
                shim = $(SHIM).handler(that).hide();

            Widget.fn.init.call(that, element, options);

            that.shim = shim;
            that.element = element;
            options = that.options;

            if (options.className) {
                that.shim.addClass(options.className);
            }

            if (!options.modal) {
                that.shim.on("up", "hide");
            }

            (app ? app.element : $(document.body)).append(shim);

            that.popup = new Popup(that.element, {
                anchor: shim,
                modal: true,
                appendTo: shim,
                origin: align,
                position: position,
                animation: {
                    open: {
                        effects: effect,
                        duration: options.duration
                    },
                    close: {
                        duration: options.duration
                    }
                },
                deactivate: function() {
                    shim.hide();
                },
                open: function() {
                    shim.show();
                }
            });

            kendo.notify(that);
        },

        options: {
            name: "Shim",
            modal: false,
            align: undefined,
            position: undefined,
            effect: undefined,
            duration: 200
        },

        show: function() {
            this.popup.open();
        },

        hide: function(e) {
            if (!e || !$.contains(this.shim.children()[0], e.target)) {
                this.popup.close();
            }
        },

        destroy: function() {
            Widget.fn.destroy.call(this);
            this.shim.kendoDestroy();
            this.popup.destroy();
            this.shim.remove();
        }
    });

    ui.plugin(Shim);
})(window.kendo.jQuery);
