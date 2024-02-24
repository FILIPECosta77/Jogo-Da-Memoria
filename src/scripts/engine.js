const emojis = [
  "❤️",
  "❤️",
  "👻",
  "👻",
  "💩",
  "💩",
  "👽",
  "👽",
  "🤖",
  "🤖",
  "☠️",
  "☠️",
  "😺",
  "😺",
  "👾",
  "👾",
];
let openCards = [];

let randomizeEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = randomizeEmojis[i];

  document.querySelector(".game").appendChild(box);
}
