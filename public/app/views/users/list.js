App.views.UsersList = Ext.extend(Ext.Panel, {
    initComponent: function(){
        Ext.apply(this, {
            html: 'placeholder',
            layout: 'fit',
            
            dockedItems: [
                {
                    dock: 'top',
                    xtype: 'toolbar',
                    title: 'Users',
                    items: [
                        { xtype: 'spacer' },
                        {
                            itemId: 'addButton',
                            iconCls: 'add',
                            iconMask: true,
                            ui: 'plain',
                            handler: function() {
                                Ext.dispatch({
                                    controller: 'Users',
                                    action: 'newForm'
                                })
                            },
                            scope: this
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'list',
                    itemTpl: '{name}',
                    store: App.stores.users,
                    emptyText: '<div class="emptytext">There are no users in the system at the moment.</div>',
                }
            ]
        });

        App.views.UsersList.superclass.initComponent.call(this);
    }
});

Ext.reg('App.views.UsersList', App.views.UsersList);
