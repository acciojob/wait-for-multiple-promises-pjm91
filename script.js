//your JS code here. If required.
// Function to simulate a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(promiseName) {
  const randomTime = Math.floor(Math.random() * 3) + 1; // Random time between 1 and 3 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ promiseName, time: randomTime });
    }, randomTime * 1000);
  });
}

// Create the three promises
const promise1 = createRandomPromise("Promise 1");
const promise2 = createRandomPromise("Promise 2");
const promise3 = createRandomPromise("Promise 3");

// Wait for all promises to resolve
Promise.all([promise1, promise2, promise3]).then(results => {
  // Remove the Loading... row
  const table = document.getElementById('promiseTable');
  table.innerHTML = ""; // Clear the table

  // Add the results rows
  results.forEach(result => {
    const row = table.insertRow();
    row.insertCell(0).textContent = result.promiseName;
    row.insertCell(1).textContent = result.time;
  });

  // Calculate total time
  const totalTime = results.reduce((sum, result) => sum + result.time, 0);

  // Add the Total row
  const totalRow = table.insertRow();
  totalRow.insertCell(0).textContent = "Total";
  totalRow.insertCell(1).textContent = totalTime.toFixed(3); // Display total time with 3 decimals
});
