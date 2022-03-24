const schedule = require('node-schedule');

function tick() {

    console.log(`${new Date().toLocaleTimeString()}`)

    schedule.scheduleJob('*/10 * * * * *', function(){
        console.log('The answer to life, the universe, and everything!');
    });
}
  
setInterval(tick, 1000);