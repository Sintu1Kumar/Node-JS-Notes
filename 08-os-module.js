const os = require('os');

console.log(os);

//* info about current user
const user = os.userInfo();
console.log(user);

// system uptime
console.log(`System uptime is: ${os.uptime()} Seconds`);
// OS name
console.log(`Os Name: ${os.type()}`);
// OS release
console.log(`OS Release: ${os.release()}`);
// OS Total memory
console.log(`OS Total Memory: ${os.totalmem()}`);
// OS Free memory
console.log(`OS Free Memory: ${os.freemem()}`);
