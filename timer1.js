const alarmClock = function (delay) {
  for (let time of delay) {
    if (time <= 0) continue;
    if (time === undefined) continue;
    if (isNaN(time)) continue;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}
const args = alarmClock(process.argv.slice(2));
console.log(args)