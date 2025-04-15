function changeMessage() {
  const messages = [
    "フォートナイト最高",
    "プログラミング面白い",
    "プログラミング頑張ります",
    "よろしくお願いします"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[randomIndex];
}＿
