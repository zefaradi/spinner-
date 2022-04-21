const sentence = "|/-\\|\n";
let delay = 100;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  }, delay);
  delay += 200;
}