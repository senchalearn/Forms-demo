App.views.UsersList = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var addButton, titlebar, list;

        addButton = {
            itemId: 'addButton',
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            handler: this.onAddAction,
            scope: this
        };

        titlebar = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Users',
            items: [ { xtype: 'spacer' }, addButton ]
        };

        list = {
            xtype: 'list',
            itemTpl: '{name}',
            store: App.stores.users
        };

        Ext.apply(this, {
            html: 'placeholder',
            layout: 'fit',
            dockedItems: [titlebar],
            items: [list]
        });

        App.views.UsersList.superclass.initComponent.call(this);
    },

    onAddAction: function() {
        Ext.dispatch({
            controller: 'Users',
            action: 'newForm'
        });
    }

});

Ext.reg('App.views.UsersList', App.views.UsersList);
