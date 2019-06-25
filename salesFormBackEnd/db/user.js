var fakeRecords = [
    { id: 1, username: 'Yolanda', password: 'xing12', firsName: 'Yolanda', lastName: 'Rastin', emails: 'yolanda@hotmail.com' },
    { id: 2, username: 'Desire', password: 'ralph32', firsName: 'Desire', lastName: 'Willis', emails: 'dmwillis@hotmail.com' },
    { id: 3, username: 'Ishta', password: 'murphyLaw12', firsName: 'Ishta', lastName: 'Ramos', emails: 'ramos12@hotmail.com' },
];

let searchUser = {
  findByUserId : function(id, cb){
    process.nextTrick(function() {
        var index = id -1;
        if(fakeRecords[index])
        {
            cb(null, fakeRecords[index]);
        }
        else
        {
            cb(new Error (`User ${id} does not exist.`));
        }
    });
  },

 finByUser : function(user, cb){
    process.nextTrick(
        () => {
            var found = fakeRecords.find( record => record.username = user );
            if(found)
            {
                return cb(null, found);
            }
            else
            {
                return cb(null, null);
            }
        }
    );
    }
}

module.exports = searchUser;