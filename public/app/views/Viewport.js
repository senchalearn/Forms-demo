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
        if (target === 'form') {
            this.setActiveItem(App.views.usersForm,
                { type: 'slide', direction: 'left' }
            );
        } else if (target === 'list') {
            this.setActiveItem(App.views.usersList,
                { type: 'slide', direction: 'right' }
            );
        }
    }
});
