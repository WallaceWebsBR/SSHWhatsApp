const wa = require('@open-wa/wa-automate');
const { exec } = require('child_process');

wa.create().then(client => start(client));

function start(client) {
  client.onMessage(message => {
    if (message.body) {
         exec(message.body, (error, stdout, stderr) => {
                if (error){
                client.sendText(message.from, error.message);
                }
                if (stderr){
                client.sendText(message.from, stderr);
                }
                client.sendText(message.from, stdout);
        });
    }
  });
}
