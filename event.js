const events = [
  { title: "AI Workshop", speaker: "Dr.Kavi", time: "09:30", category: "Workshop" },
  { title: "Future of Tech", speaker: "Ms. Kathir", time: "11:00", category: "Keynote" },
  { title: "Startup Panel", speaker: "Experts", time: "14:00", category: "Panel" },
  { title: "Cloud Computing", speaker: "Mr. Leo", time: "16:00", category: "Panel" }
];

const box = document.getElementById("events");

function showEvents(list) {
  box.innerHTML = "";
  list.forEach(e => {
    box.innerHTML += `
      <div class="event" 
           data-category="${e.category}" 
           data-time="${e.time}">
        
        <h4>${e.title}</h4>
        <p>Speaker: ${e.speaker}</p>
        <p>Time: ${e.time}</p>
        <p>Category: ${e.category}</p>
      </div>
    `;
  });
}

showEvents(events);

function filterCategory(cat) {
  const cards = document.querySelectorAll(".event");

  cards.forEach(card => {
    card.classList.toggle(
      "hide",
      cat !== "All" && card.dataset.category !== cat
    );
  });
}

function filterTime(period) {
  const cards = document.querySelectorAll(".event");
  cards.forEach(card => {
    let date = new Date("2024-01-01 " + card.dataset.time);
    let hour = date.getHours();
    
    if (period === "Morning") {
      card.classList.toggle("hide", hour >= 12);
    } else {
      card.classList.toggle("hide", hour < 12);
    }
  });
}