
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");
  const button = document.getElementById("sendButton");
  const response = document.getElementById("response");

  if (!input || !button || !response) return;

  function sendMessage() {
    const message = input.value.trim();

    if (!message) {
      response.textContent = "من فضلك اكتب رسالتك أولاً.";
      return;
    }

    response.textContent =
      "أنت: " + message +
      "\n\nChattpG: مرحباً بك! تم استلام رسالتك. هذه نسخة تجريبية، وسيتم ربط المساعد بالذكاء الاصطناعي الحقيقي في المرحلة القادمة.";

    input.value = "";
  }

  button.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});
