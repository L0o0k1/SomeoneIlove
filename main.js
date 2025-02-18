const app = document.getElementById("app");

function renderButton() {
  return `
    <button class="button" id="loveButton">
      If Your Name Is Omayma, Press The Button
    </button>
  `;
}

function renderMessage() {
  return `
    <div class="text-center">
      <div class="heart-container">
        <div class="heart">❤️</div>
        <div class="heart">❤️</div>
        <div class="heart">❤️</div>
      </div>
      <h1 class="text-2xl">You Have No Idea How Much I Love You Omayma</h1>
      <p class="text-lg">
        You are not just my love, but my best friend, my confidante, and my greatest adventure. Thank you for sharing your heart with me, for being the first person I want to talk to when I wake up and the last voice I want to hear before I sleep.
      </p>
      <p>Love You MeMe </p>
    </div>
    <div class="background-hearts">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
}

function handleButtonClick() {
  app.innerHTML = renderMessage();
}

app.innerHTML = renderButton();

document
  .getElementById("loveButton")
  ?.addEventListener("click", handleButtonClick);
