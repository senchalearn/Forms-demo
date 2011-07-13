App.views.UsersForm = Ext.extend(Ext.form.FormPanel, {

    initComponent: function(){
        var titlebar, cancelButton, buttonbar, saveButton;

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

        saveButton = {
            id: 'userFormSaveButton',
            text: 'save',
            ui: 'confirm',
            handler: this.onSaveAction,
            scope: this
        };

        buttonbar = {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{xtype: 'spacer'}, saveButton]
        };

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ]
        });

        App.views.UsersForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'Users',
            action: 'index'
        });
    },

    onSaveAction: function() {
        // TODO!
    }

});

Ext.reg('App.views.UsersForm', App.views.UsersForm);
