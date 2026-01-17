// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("modeBtn");
    btn.innerText = document.body.classList.contains("dark-mode")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";
}

// Load tasks
function loadTasks() {
    fetch("http://localhost:5000/tasks")
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("taskList");
            list.innerHTML = "";
            data.forEach(task => {
                const li = document.createElement("li");
                li.innerText = task;
                list.appendChild(li);
            });
        });
}

loadTasks();

// Add task
document.getElementById("addBtn").addEventListener("click", () => {
    const task = document.getElementById("taskInput").value;

    fetch("http://localhost:5000/add-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task })
    })
    .then(() => {
        document.getElementById("taskInput").value = "";
        loadTasks();
    });
});
