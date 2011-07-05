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

    }

});
