App.views.UsersForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function(){
        Ext.apply(this, {
            html: 'user form'
        });

        App.views.UsersForm.superclass.initComponent.call(this);
    }
});

Ext.reg('App.views.UsersForm', App.views.UsersForm);
