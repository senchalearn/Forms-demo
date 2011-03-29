App = new Ext.Application({
    name: "App",

    launch: function() {
        this.views.viewport = new this.views.Viewport();
    }
});
