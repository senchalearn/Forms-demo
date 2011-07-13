Ext.regController('Users', {
    store: App.stores.users,

    index: function() {
        App.views.viewport.reveal('usersList');
    },

    newForm: function() {
        var model = new App.models.User()
        App.views.usersForm.load(model);
        App.views.viewport.reveal('usersForm');
    },

    save: function(params) {
        params.record.set(params.data);
        this.store.create(params.data);
        this.index();
    }

});
