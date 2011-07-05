Ext.regController('Users', {

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

    save: function(params) {
        params.record.set(params.data);
        App.stores.users.create(params.data);
        this.showList();
    }

});
