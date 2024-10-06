const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot1 = new Eris(process.env.token1);
const bot2 = new Eris(process.env.token2);
const bot3 = new Eris(process.env.token3);


bot1.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot2.on("error", (err) => {
  console.error(err); 
});

bot3.on("error", (err) => {
  console.error(err); 
});

bot1.connect(); // Get the bot to connect to Discord
bot2.connect();
bot3.connect();
