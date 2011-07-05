App.stores.users = new Ext.data.Store({
    model: 'User',
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id: 'sencha-users'
    }
});

// temporary data, for use until full CRUD is implemented
App.stores.users.proxy.clear();
App.stores.users.add({ name: 'Drew Neil', email: 'drew.neil@example.com' });
App.stores.users.add({ name: 'James Pearce', email: 'james.pearce@example.com' });
App.stores.users.add({ name: 'Ed Spencer', email: 'ed.spencer@example.com' });
App.stores.users.add({ name: 'Tommy Mainz', email: 'tommy.mainz@example.com' });
App.stores.users.sync();
