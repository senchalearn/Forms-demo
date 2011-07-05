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
        }
    ],

    validations: [
        {
            type: 'presence',
            name: 'name'
        }, {
            type: 'format',
            name: 'email',
            matcher: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            message: 'must be a valid email'
        }
    ],

});
