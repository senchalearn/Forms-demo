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

    editForm: function(params) {
        var model = this.store.getAt(params.index);
        App.views.usersForm.load(model);
        App.views.viewport.reveal('usersForm');
    },

    save: function(params) {
        params.record.set(params.data);
        var errors = params.record.validate();

        if (errors.isValid()) {
            this.store.create(params.data);
            this.index();
        } else {
            params.form.showErrors(errors);
        }
    },

    update: function(params) {
        var tmpUser = new App.models.User(params.data),
            errors = tmpUser.validate()

        if (errors.isValid()) {
            params.record.set(params.data);
            params.record.save();
            this.index();
        } else {
            params.form.showErrors(errors);
        }
    },

    remove: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }

});
