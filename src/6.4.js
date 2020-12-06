// Section 6: CRUD

const users = require('../data/userObject.json');
const saveFile = require('../api/saveFile');

console.log('Users:');
console.table(users);

const handle = 'bochap_';
delete users[handle];
/* TODO:
    [ ] Delete Bocha from `users` list
    [ ] Update information on `userObject.json` file
*/

console.log('Delete:');
console.table(users);
saveFile.toJSON(users,'userObject');
