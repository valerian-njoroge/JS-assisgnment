greetBtn.addEventListener("click", () => {
greeting.textContent = greetUser(nameInput.value);
lastAction = "greeted";
console.log("[Part 4] Greeted user.");
});


addNumberBtn.addEventListener("click", () => {
const value = Number(newNumberInput.value);
if (!Number.isFinite(value)) {
averageText.textContent = "Average: please enter a valid number";
return;
}
numbers.push(value); // mutate numbers (global for demo)
const avg = calculateAverage(numbers); // uses for loop
averageText.textContent = `Average: ${avg.toFixed(2)} (n=${numbers.length})`;
newNumberInput.value = "";
lastAction = "added number";
console.log("[Part 4] Added number & updated average.");
});


// 3) Render list (create/append nodes) and show loop summary
const renderListBtn = document.getElementById("renderListBtn");
const numbersList = document.getElementById("numbersList");
const loopSummary = document.getElementById("loopSummary");


renderListBtn.addEventListener("click", () => {
numbersList.innerHTML = ""; // clear old
numbersList.appendChild(buildListItems(numbers)); // uses for...of loop


// while loop demo
const ticks = whileCountUp(Math.min(numbers.length, 10));
loopSummary.textContent = `Rendered ${numbers.length} items. While loop ran ${ticks} ticks.`;
lastAction = "rendered list";
console.log("[Part 4] Rendered list & updated loop summary.");
});


// 4) Toggle theme via classList and update text
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const domMessage = document.getElementById("domMessage");


toggleThemeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
const isDark = document.body.classList.contains("dark");
domMessage.innerHTML = `Theme is currently <strong>${isDark ? "dark" : "light"}</strong>.`;
lastAction = "toggled theme";
console.log("[Part 4] Toggled theme.");
});


// Initialize some UI on first load
(function init() {
statusText.textContent = "Status: Click 'Check Status' to evaluate";
averageText.textContent = `Average: ${calculateAverage(numbers).toFixed(2)} (n=${numbers.length})`;
console.log("App initialized. Last action:", lastAction);
})();
