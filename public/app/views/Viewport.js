App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    
    initComponent: function() {
        Ext.apply(this, {
            items: [
                { xtype: 'App.views.UsersList', id: 'usersList' },
                { xtype: 'App.views.UsersForm', id: 'usersForm' },
            ]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    },

    reveal: function(target) {
        var direction = (target === 'usersList') ? 'right' : 'left'
        this.setActiveItem(
            App.views[target],
            { type: 'slide', direction: direction }
        );
    }
});
