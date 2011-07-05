App.views.UsersForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function(){
        var titlebar, cancelButton;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction
        };

        titlebar = {
            xtype: 'toolbar',
            items: [ cancelButton ]
        };

        Ext.apply(this, {
            html: 'user form',
            scroll: 'vertical',
            dockedItems: [ titlebar ]
        });

        App.views.UsersForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'Users',
            action: 'showList'
        });
    }
});

Ext.reg('App.views.UsersForm', App.views.UsersForm);
