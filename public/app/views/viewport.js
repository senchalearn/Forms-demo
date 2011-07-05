App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    
    initComponent: function() {
        Ext.apply(this, {
            items: [
                { xtype: 'App.views.UsersList' },
                { xtype: 'App.views.UsersForm' },
            ]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
