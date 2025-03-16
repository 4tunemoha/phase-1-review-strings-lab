// Write your code in this file!
//define durrent user
const currentUser = 'Fortune Mohammed';
//define welcomeMessage
//const welcomeMessage = 'Welcome to Flatbook, ';
// welcome message should contains value of the currentUser
//welcomeMessage = 'Welcome to Flatbook, currentUser';
//to do that concatenate & interpolate
//const welcomeMessage ='Welcome to Flatbook, ' + currentUser;
//const welcomeMessage = `Welcome to Flatbook, ${currentUser}`;
const welcomeMessage ='Welcome to Flatbook, ' + currentUser + '!';
//whenusing interpolation back ticks are used
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//last test we will use interpolation usng back ticks
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`
