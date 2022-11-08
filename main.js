document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.querySelectorAll(".card")) {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.x;
    let y = e.clientY - rect.y;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
