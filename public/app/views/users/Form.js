App.views.UsersForm = Ext.extend(Ext.form.FormPanel, {

    initComponent: function(){
        var titlebar, cancelButton;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction,
            scope: this
        };

        titlebar = {
            id: 'userFormTitlebar',
            xtype: 'toolbar',
            title: 'Create user',
            items: [ cancelButton ]
        };

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar ]
        });

        App.views.UsersForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'Users',
            action: 'index'
        });
    }

});

Ext.reg('App.views.UsersForm', App.views.UsersForm);
