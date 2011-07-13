Ext.regController('Users', {

    index: function() {
        App.views.viewport.reveal('usersList');
    },

    newForm: function() {
        App.views.viewport.reveal('usersForm');
    }

});
