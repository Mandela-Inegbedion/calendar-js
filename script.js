// Get references to HTML elements by their IDs
const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Array of month names
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Function to render the calendar
function renderCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  daysContainer.innerHTML = "";
  monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

  // Previous month's trailing days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const dayNum = prevMonthDays - i;
    daysContainer.innerHTML += `<div class="faded">${dayNum}</div>`;
  }

  // Main month days
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i); 
    const dayOfWeek = date.getDay(); 

    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;

    // Add 'today' class if it is the current day
    if (i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear()) {
      dayDiv.classList.add('today');
    }

    daysContainer.appendChild(dayDiv);
  }
}

// Navigation buttons
prevBtn.onclick = () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
};

nextBtn.onclick = () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
};

// Initial render
renderCalendar();
