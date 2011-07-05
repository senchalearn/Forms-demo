App.views.UsersForm = Ext.extend(Ext.form.FormPanel, {
    initComponent: function(){
        Ext.apply(this, {
            html: 'user form',
            scroll: 'vertical',

            dockedItems: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            text: 'cancel',
                            ui: 'back',
                            handler: function() {
                                Ext.dispatch({
                                    controller: 'Users',
                                    action: 'showList'
                                });
                            }
                        }
                    ]
                }
            ]
        });

        App.views.UsersForm.superclass.initComponent.call(this);
    }
});

Ext.reg('App.views.UsersForm', App.views.UsersForm);
