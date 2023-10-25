// Step 2: Parse Command Line Arguments
const alarms = process.argv.slice(2).filter(arg => {
  const number = parseInt(arg);
  return !isNaN(number) && number > 0;
});

// Step 3: Schedule Alarms
alarms.forEach((alarm) => {
  setTimeout(() => {
    process.stdout.write('\x07'); // Step 4: Trigger the Beep
  }, alarm * 1000); // Convert seconds to milliseconds
});
