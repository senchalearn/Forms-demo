Ext.regController('Users', {
    store: App.stores.users,

    showList: function() {
        App.views.viewport.setActiveItem(
            App.views.usersList,
            {
                type: 'slide',
                direction: 'right'
            }
        );
    },

    newForm: function() {
        var model = new App.models.User()
        App.views.usersForm.load(model);

        App.views.viewport.setActiveItem(
            App.views.usersForm,
            {
                type: 'slide',
                direction: 'left'
            }
        );

    },

    editForm: function(options) {
        var model = this.store.getAt(options.index);
        App.views.usersForm.load(model);

        App.views.viewport.setActiveItem(
            App.views.usersForm,
            {
                type: 'slide',
                direction: 'left'
            }
        );
    },

    save: function(params) {
        params.record.set(params.data);
        var errors = params.record.validate()
        if (errors.isValid()) {
            this.store.create(params.data);
            this.showList();
        } else {
            params.form.showErrors(errors);
        }
    },

    update: function(params) {
        params.record.set(params.data);
        var errors = params.record.validate()
        if (errors.isValid()) {
            params.record.save();
            this.showList();
        } else {
            params.form.showErrors(errors);
        }
    },

    remove: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.showList();
    }

});
