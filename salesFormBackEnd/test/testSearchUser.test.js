let searchUser = require('../db/user');

test('searchUser exist', () => {
    
    expect(searchUser).toBeInstanceOf(Object);
});