const schedule = [
  { date: "2027-01-03", lesson: "What is Prayer", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Kassidy Wilson"] },
  { date: "2027-01-10", lesson: "God Our Heavenly Father", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Luke Boyce"] },
  { date: "2027-01-17", lesson: "God's Holiness", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Kelsey Hatcher"] },
  { date: "2027-01-24", lesson: "God's Will", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Isaac Adkins"] },
  { date: "2027-01-31", lesson: "God Provides", noService: true },
  { date: "2027-02-07", lesson: "God Forgives", adults: "Caleb & Kathy Cobb", teens: ["Matthew Goodson", "Kassidy Wilson"] },
  { date: "2027-02-14", lesson: "God Delivers", adults: "Caleb & Kathy Cobb", teens: ["Savannah Winland", "Luke Boyce"] },
  { date: "2027-02-21", lesson: "God's Glory", adults: "Caleb & Kathy Cobb", teens: ["Lane Boyce", "Moriah Hatcher"] },
  { date: "2027-02-28", lesson: "The Way", adults: "Caleb & Kathy Cobb", teens: ["Kelsey Hatcher", "Emily Goodson"] },
  { date: "2027-03-07", lesson: "Good Shepherd", adults: "Charles & Alana Kidder", teens: ["Isaac Adkins", "Matthew Goodson"] },
  { date: "2027-03-14", lesson: "The Mediator", adults: "Charles & Alana Kidder", teens: ["Kassidy Wilson", "Savannah Winland"] },
  { date: "2027-03-21", lesson: "The Light", adults: "Charles & Alana Kidder", teens: ["Luke Boyce", "Kelsey Hatcher"] },
  { date: "2027-03-28", lesson: "The True Vine", adults: "Charles & Alana Kidder", teens: ["Moriah Hatcher", "Lane Boyce"] },
  { date: "2027-04-04", lesson: "The Sacrificial Lamb", adults: "Bri Goodson & Tracy Adkins", teens: ["Emily Goodson", "Isaac Adkins"] },
  { date: "2027-04-11", lesson: "The Resurrection", adults: "Bri Goodson & Tracy Adkins", teens: ["Matthew Goodson", "Kassidy Wilson"] },
  { date: "2027-04-18", lesson: "The Conqueror", adults: "Bri Goodson & Tracy Adkins", teens: ["Savannah Winland", "Luke Boyce"] },
  { date: "2027-04-25", lesson: "He is Lord", adults: "Bri Goodson & Tracy Adkins", teens: ["Lane Boyce", "Moriah Hatcher"] },
  { date: "2027-05-02", lesson: "Dependable", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Emily Goodson"] },
  { date: "2027-05-09", lesson: "Discernment", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Isaac Adkins"] },
  { date: "2027-05-16", lesson: "Confidence", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Savannah Winland"] },
  { date: "2027-05-23", lesson: "Music", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Luke Boyce"] },
  { date: "2027-05-30", lesson: "Honesty", noService: true },
  { date: "2027-06-06", lesson: "Friendship", adults: "Caleb & Kathy Cobb", teens: ["Moriah Hatcher", "Isaac Adkins"] },
  { date: "2027-06-13", lesson: "Leadership", adults: "Caleb & Kathy Cobb", teens: ["Emily Goodson", "Kelsey Hatcher"] },
  { date: "2027-06-20", lesson: "Respect", adults: "Caleb & Kathy Cobb", teens: ["Matthew Goodson", "Kassidy Wilson"] },
  { date: "2027-06-27", lesson: "Grace", adults: "Caleb & Kathy Cobb", teens: ["Savannah Winland", "Luke Boyce"] },
  { date: "2027-07-04", lesson: "Liberty", adults: "Charles & Alana Kidder", teens: ["Lane Boyce", "Moriah Hatcher"] },
  { date: "2027-07-11", lesson: "Service", adults: "Charles & Alana Kidder", teens: ["Kelsey Hatcher", "Emily Goodson"] },
  { date: "2027-07-18", lesson: "Baptism", adults: "Charles & Alana Kidder", teens: ["Isaac Adkins", "Matthew Goodson"] },
  { date: "2027-07-25", lesson: "Calm", adults: "Charles & Alana Kidder", teens: ["Kassidy Wilson", "Savannah Winland"] },
  { date: "2027-08-01", lesson: "Teachable", adults: "Bri Goodson & Tracy Adkins", teens: ["Luke Boyce", "Kelsey Hatcher"] },
  { date: "2027-08-08", lesson: "Optimistic", adults: "Bri Goodson & Tracy Adkins", teens: ["Moriah Hatcher", "Lane Boyce"] },
  { date: "2027-08-15", lesson: "Citizenship", adults: "Bri Goodson & Tracy Adkins", teens: ["Emily Goodson", "Isaac Adkins"] },
  { date: "2027-08-22", lesson: "Willing", adults: "Bri Goodson & Tracy Adkins", teens: ["Matthew Goodson", "Kassidy Wilson"] },
  { date: "2027-08-29", lesson: "Responsibility", noService: true },
  { date: "2027-09-05", lesson: "Watchful", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Savannah Winland"] },
  { date: "2027-09-12", lesson: "Diligence", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Lane Boyce"] },
  { date: "2027-09-19", lesson: "Patience", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Emily Goodson"] },
  { date: "2027-09-26", lesson: "Sharing", adults: "Dalton Brown & Kenzie Hatcher", adultHelper: "Phoebe Brown", teens: ["Matthew Goodson"] },
  { date: "2027-10-03", lesson: "Nice Words", adults: "Caleb & Kathy Cobb", teens: ["Kassidy Wilson", "Savannah Winland"] },
  { date: "2027-10-10", lesson: "Brotherly Love", adults: "Caleb & Kathy Cobb", teens: ["Luke Boyce", "Kelsey Hatcher"] },
  { date: "2027-10-17", lesson: "Useful", adults: "Caleb & Kathy Cobb", teens: ["Moriah Hatcher", "Lane Boyce"] },
  { date: "2027-10-24", lesson: "Sympathetic", adults: "Caleb & Kathy Cobb", teens: ["Emily Goodson", "Isaac Adkins"] },
  { date: "2027-10-31", lesson: "The Local Church", noService: true },
  { date: "2027-11-07", lesson: "God's Day", adults: "Charles & Alana Kidder", teens: ["Matthew Goodson", "Kassidy Wilson"] },
  { date: "2027-11-14", lesson: "God's House", adults: "Charles & Alana Kidder", teens: ["Savannah Winland", "Luke Boyce"] },
  { date: "2027-11-21", lesson: "Bible Study", adults: "Charles & Alana Kidder", teens: ["Lane Boyce", "Moriah Hatcher"] },
  { date: "2027-11-28", lesson: "Singing", adults: "Charles & Alana Kidder", teens: ["Kelsey Hatcher", "Emily Goodson"] },
  { date: "2027-12-05", lesson: "Anticipation", adults: "Bri Goodson & Tracy Adkins", teens: ["Isaac Adkins", "Matthew Goodson"] },
  { date: "2027-12-12", lesson: "God's Presence", adults: "Bri Goodson & Tracy Adkins", teens: ["Kassidy Wilson", "Savannah Winland"] },
  { date: "2027-12-19", lesson: "Salvation", adults: "Bri Goodson & Tracy Adkins", teens: ["Luke Boyce", "Kelsey Hatcher"] },
  { date: "2027-12-26", lesson: "Peace", adults: "Bri Goodson & Tracy Adkins", teens: ["Moriah Hatcher", "Lane Boyce"] }
];

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const grid = document.querySelector("#schedule-grid");
const summary = document.querySelector("#results-summary");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#schedule-search");
const monthFilter = document.querySelector("#month-filter");

function localDate(dateText) {
  const [year, month, day] = dateText.split("-").map(Number);
  return new Date(year, month - 1, day, 12);
}

function lessonFile(item) {
  return `${item.date} - ${item.lesson}.pdf`;
}

function lessonHref(item) {
  return `lessons/${encodeURIComponent(lessonFile(item))}`;
}

function teamSearchText(item) {
  return [item.date, item.lesson, item.adults, item.adultHelper, ...(item.teens || [])].filter(Boolean).join(" ").toLowerCase();
}

function teamMarkup(item) {
  if (item.noService) {
    return `<p><strong>No Junior Church</strong> — fifth Sunday</p><p>The curriculum PDF is still available for planning or future use.</p>`;
  }
  const adultHelper = item.adultHelper ? `<p><strong>Adult helper:</strong> ${item.adultHelper}</p>` : "";
  const teenLabel = item.teens.length > 1 ? "Teen helpers" : "Teen helper";
  return `<p><strong>Adult teachers:</strong> ${item.adults}</p>${adultHelper}<p><strong>${teenLabel}:</strong> ${item.teens.join(" & ")}</p>`;
}

function cardMarkup(item) {
  const date = localDate(item.date);
  const month = monthNames[date.getMonth()];
  const linkLabel = item.noService ? "View lesson for reference" : "View lesson PDF";
  return `
    <article class="schedule-card${item.noService ? " no-service" : ""}">
      <div class="date-block" aria-label="${month} ${date.getDate()}, 2027">
        <span class="date-month">${month.slice(0, 3)}</span>
        <span class="date-day">${date.getDate()}</span>
        <span class="date-year">2027</span>
      </div>
      <div class="card-body">
        <span class="card-status">${item.noService ? "No service" : "Junior Church"}</span>
        <h3 class="lesson-title">${item.lesson}</h3>
        <div class="team-list">${teamMarkup(item)}</div>
        <a class="lesson-button" href="${lessonHref(item)}" target="_blank" rel="noopener">${linkLabel}</a>
      </div>
    </article>`;
}

function renderSchedule() {
  const query = searchInput.value.trim().toLowerCase();
  const month = monthFilter.value;
  const filtered = schedule.filter(item => {
    const monthMatches = month === "all" || item.date.slice(5, 7) === month;
    const searchMatches = !query || teamSearchText(item).includes(query);
    return monthMatches && searchMatches;
  });
  grid.innerHTML = filtered.map(cardMarkup).join("");
  summary.textContent = `${filtered.length} ${filtered.length === 1 ? "Sunday" : "Sundays"} shown`;
  emptyState.hidden = filtered.length !== 0;
}

function renderNextService() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const next = schedule.find(item => !item.noService && localDate(item.date) >= today) || schedule.find(item => !item.noService);
  const date = localDate(next.date);
  const dateText = date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const adultHelper = next.adultHelper ? ` · Adult helper: ${next.adultHelper}` : "";
  document.querySelector("#next-service").innerHTML = `
    <div>
      <div class="next-date">${dateText}</div>
      <div class="next-lesson">${next.lesson}</div>
    </div>
    <p class="next-team"><strong>Adult teachers:</strong> ${next.adults}${adultHelper}<br><strong>Teen ${next.teens.length > 1 ? "helpers" : "helper"}:</strong> ${next.teens.join(" & ")}</p>
    <a class="lesson-button" href="${lessonHref(next)}" target="_blank" rel="noopener">Open lesson PDF</a>`;
}

document.querySelector("#copy-link").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(window.location.href);
    status.textContent = "Page link copied.";
  } catch {
    status.textContent = "Copy the address from your browser to share this page.";
  }
});

searchInput.addEventListener("input", renderSchedule);
monthFilter.addEventListener("change", renderSchedule);
renderNextService();
renderSchedule();
