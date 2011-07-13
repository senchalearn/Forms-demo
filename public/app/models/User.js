App.models.User = Ext.regModel('User', {
    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'name',
            type: 'string'
        }, {
            name: 'email',
            type: 'string'
        }, {
            name: 'phone',
            type: 'string'
        }
    ],

    proxy: {
        type: 'localstorage',
        id: 'sencha-users'
    }
});
