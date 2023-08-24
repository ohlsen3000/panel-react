const fs = require('fs');

fs.readdir('./public/sound', (err, data) => {
    if (err) {
        console.error(err);
    }
    fs.writeFile('./src/soundlist.js', 'export const sounds = ' + JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
        }
    });
});