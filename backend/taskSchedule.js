function runTask() {
    const now = new Date();
    const hours = now.getHours();

    // Run the task only between 6 AM (6) and 6 PM (18)
    if (hours >= 6 && hours < 18) {
        console.log("Task is running at", now.toLocaleString());
        // Add your task logic here
    } else {
        console.log("Nighttime - Task skipped at", now.toLocaleString());
    }
}

// 2 hours in milliseconds
const twoHours = 2 * 60 * 60 * 1000;

// Schedule the task to run every 2 hours
setInterval(runTask, twoHours);

// Optional: Run the task immediately on script start
runTask();
