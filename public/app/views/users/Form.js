App.views.UsersForm = Ext.extend(Ext.form.FormPanel, {
    defaultInstructions: 'Please enter the information above.',

    initComponent: function(){
        var titlebar, cancelButton, buttonbar, saveButton, fields;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction
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

        fields = {
            xtype: 'fieldset',
            id: 'userFormFieldset',
            title: 'User details',
            instructions: this.defaultInstructions,
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
                    xtype: 'App.views.ErrorField',
                    fieldname: 'name',
                },
                {
                    name: 'email',
                    label: 'email',
                },
                {
                    xtype: 'App.views.ErrorField',
                    fieldname: 'email',
                },
            ]
        };

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items: [ fields ],
            listeners: {
                beforeactivate: function() {
                    var saveButton = this.down('#userFormSaveButton'),
                        titlebar = this.down('#userFormTitlebar'),
                        model = this.getRecord();

                    if (model.phantom) {
                        titlebar.setTitle('Create user');
                        saveButton.setText('save');
                    } else {
                        titlebar.setTitle('Update user');
                        saveButton.setText('update');
                    }
                },
                deactivate: function() {
                    this.resetForm();
                }
            }
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
        var model = this.getRecord();

        Ext.dispatch({
            controller: 'Users',
            action    : (model.phantom ? 'save' : 'update'),
            data      : this.getValues(),
            record    : this.getRecord(),
            form      : this
        });
    },

    showErrors: function(errors) {
        var fieldset = this.down('#userFormFieldset');
        this.fields.each(function(field) {
            var fieldErrors = errors.getByField(field.name),
                errorField = this.resetField(field);

            if (fieldErrors.length > 0) {
                field.addCls('invalid-field');
                errorField.update(fieldErrors);
                errorField.show();
            }
        }, this);
        fieldset.setInstructions("Please ammend the flagged fields");
    },

    resetForm: function() {
        var fieldset = this.down('#userFormFieldset');
        this.fields.each(function(field) {
            this.resetField(field);
        }, this);
        fieldset.setInstructions(this.defaultInstructions);
        this.reset();
    },

    resetField: function(field) {
        var errorField = this.down('#'+field.name+'ErrorField');
        errorField.hide();
        field.removeCls('invalid-field');
        return errorField;
    }
});

Ext.reg('App.views.UsersForm', App.views.UsersForm);
