App = new Ext.Application({
    name: "App",

    launch: function() {
        this.views.viewport = new this.views.Viewport();

        this.views.usersList = this.views.viewport.down('#usersList');
        this.views.usersForm = this.views.viewport.down('#usersForm');
    }
});
