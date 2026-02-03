
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  const msg = document.getElementById("msg");

  let yesScale = 1;
  let noScale = 1;
  let noClicks = 0;

  const taunts = [
    "Adela… that hurts 😔",
    "Are you sure about that?",
    "The bunny is sad now 🐰💔",
    "This button won’t save you.",
    "Resistance is futile 😈",
    "Just say yes already 💖"
  ];

  no.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 80 - 40;
    no.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
  });

  no.addEventListener("click", () => {
    noClicks++;
    yesScale += 0.35;
    noScale -= 0.15;
    if (noScale < 0.15) noScale = 0.15;

    yes.style.transform = `translateX(-120%) scale(${yesScale})`;
    no.style.transform += ` scale(${noScale})`;

    msg.textContent = taunts[Math.min(noClicks, taunts.length - 1)];
  });

  yes.addEventListener("click", () => {
    document.body.innerHTML = `
      <div class="love-screen">
        <div>I LOVE YOU SO MUCH<br>Adela 💖💖💖</div>
        <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif">
      </div>
    `;
  });
