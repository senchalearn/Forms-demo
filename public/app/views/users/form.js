App.views.UsersForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function(){
        var titlebar, cancelButton, buttonbar, saveButton, fields;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction
        };

        titlebar = {
            xtype: 'toolbar',
            title: 'Create user',
            items: [ cancelButton ]
        };

        saveButton = {
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

        fields = {
            xtype: 'fieldset',
            id: 'userFormFieldset',
            title: 'User details',
            instructions: 'Please enter the information above.',
            defaults: {
                required: false,
                labelAlign: 'left',
                labelWidth: '40%',
                xtype: 'textfield',
                useClearIcon: true,
                autoCapitalize : false
            },
            items: [
                {
                    name : 'name',
                    label: 'name',
                },
                {
                    name: 'email',
                    label: 'email',
                }
            ]
        };

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items: [ fields ]
        });

        App.views.UsersForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'Users',
            action: 'showList'
        });
    },

    onSaveAction: function() {
        Ext.dispatch({
            controller: 'Users',
            action: 'save',
            data      : this.getValues(),
            record    : this.getRecord()
        });
    }

});

Ext.reg('App.views.UsersForm', App.views.UsersForm);
