const concat = require('concat');

concat([
    './assets/style1.css',
    './assets/style2.css',
], './assets/main.css').then(() => {
    console.log('done');
}).catch((err) => {
    console.error(err);
});